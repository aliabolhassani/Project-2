import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import {
  checkTable,
  getItem,
  updateAttribute,
  getValidItems
} from '../../libs/database';
import schema from './schema';
import * as colors from 'colors/safe';
import * as ccxt from 'ccxt';

const binanceApiKey = process.env.BINANCE_API_KEY;
const binanceApiSecret = process.env.BINANCE_API_SECRET;

const exchange = new ccxt.binance({
  // verbose: true,
  apiKey: binanceApiKey,
  secret: binanceApiSecret
});

const processOrders: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const tableName = 'orders';

  checkTable(tableName, (response: boolean) => {
    if (response === true) {
      return formatJSONResponse({
        message: `Table is not yet initialized.`,
        event
      });
    }
  });

  const validItems = await getValidItems();

  for (const validItem of <any>validItems) {
    validItem.marketPrice = await getPrice(validItem.currency);
    const val = await processSignals(validItem);

    console.log('>>>', colors.white(val));
  }
  return formatJSONResponse({
    message: `Process completed.`,
    event
  });
};

export const main = middyfy(processOrders);

const getKey = async (): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const stdin = process.stdin;
      stdin.setEncoding('utf8');
      stdin.once('data', function (key) {
        resolve(key);
      });
    }
  );
};

const log = async (item: any, data: any): Promise<boolean> => {
  return new Promise(
    async (
      resolve: (value?: boolean | PromiseLike<boolean>) => void,
      reject: (reason?: any) => void
    ) => {
      data.timestamp = +new Date();
      const itemLog = (await (<any>getItem(item.orderId))).log || [];
      console.log(colors.magenta(data));
      itemLog.push(data);
      await updateAttribute(item, 'log', itemLog);
      resolve(true);
    }
  );
};

const marketBuy = async (currency: string, amount: number): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      exchange
        .createMarketOrder(currency, 'buy', <any>amount.toFixed(8))
        .then((id) => {
          console.log(colors.yellow(<any>id));
          resolve(id);
        })
        .catch((e) => {
          console.log(colors.red(e));
          resolve(null);
        });
    }
  );
};

const marketSell = async (currency: string, amount: number): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      exchange
        .createMarketOrder(currency, 'sell', <any>amount.toFixed(8))
        .then((id) => {
          console.log(colors.yellow(<any>id));
          resolve(id);
        })
        .catch((e) => {
          console.log(colors.red(e));
          resolve(null);
        });
    }
  );
};

const getPrice = async (currency: any): Promise<number> => {
  return new Promise(
    async (
      resolve: (value?: number | PromiseLike<number>) => void,
      reject: (reason?: any) => void
    ) => {
      const price = <any>(await exchange.fetchTicker(currency)).close;
      resolve(price);
    }
  );
};

const martingaleSteps = [15, 30, 55];
const priceTolerance = 0.005;

const adjustTarget1 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const entry1 = item.entry[0];
      const entry2 = item.entry[1];

      const target1 = item.target[0];
      const target2 = item.target[1];
      const target3 = item.target[2];

      const quantity1 = item.transactions.filter(
        (element: any) => element.type === 'entry1'
      ).quantity;
      const quantity2 = item.transactions.filter(
        (element: any) => element.type === 'entry2'
      ).quantity;

      const averagePrice =
        entry1 * quantity1 + (entry2 * quantity2) / (quantity1 + quantity2);

      const newTarget1 = averagePrice - entry1 + target1;
      const newTarget2 = averagePrice - entry1 + target2;
      const newTarget3 = averagePrice - entry1 + target3;

      item.target = [newTarget1, newTarget2, newTarget3];
      await updateAttribute(item, 'target', item.target);

      await log(item, {
        event: `Target adjusted (1); new targets: ${item.target}.`
      });

      resolve(item);
    }
  );
};

const adjustTarget2 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const entry1 = item.entry[0];
      const entry2 = item.entry[1];
      const entry3 = item.entry[2];

      const target1 = item.target[0];
      const target2 = item.target[1];
      const target3 = item.target[2];

      const quantity1 = item.transactions.filter(
        (element: any) => element.type === 'entry1'
      ).quantity;
      const quantity2 = item.transactions.filter(
        (element: any) => element.type === 'entry2'
      ).quantity;
      const quantity3 = item.transactions.filter(
        (element: any) => element.type === 'entry3'
      ).quantity;

      const averagePrice =
        entry1 * quantity1 +
        entry2 * quantity2 +
        (entry3 * quantity3) / (quantity1 + quantity2 + quantity3);

      const newTarget1 = averagePrice - entry1 + target1;
      const newTarget2 = averagePrice - entry1 + target2;
      const newTarget3 = averagePrice - entry1 + target3;

      item.target = [newTarget1, newTarget2, newTarget3];
      await updateAttribute(item, 'target', item.target);

      await log(item, {
        event: `Target adjusted (2); new targets: ${item.target}.`
      });

      resolve(item);
    }
  );
};

const adjustStoploss1 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      item.stoploss = item.entry[0];
      await updateAttribute(item, 'stoploss', item.stoploss);

      await log(item, {
        event: `Stoploss adjusted (1); new stoploss: ${item.stoploss}.`
      });

      resolve(item);
    }
  );
};

const adjustStoploss2 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      item.stoploss = item.target[0];
      await updateAttribute(item, 'stoploss', item.stoploss);

      await log(item, {
        event: `Stoploss adjusted (2); new stoploss: ${item.stoploss}.`
      });

      resolve(item);
    }
  );
};

const adjustStoploss3 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const entry1 = item.transactions.filter(
        (element: any) => element.type === 'entry1'
      );
      const entry2 = item.transactions.filter(
        (element: any) => element.type === 'entry2'
      );
      item.stoploss =
        (entry1.price * entry1.quantity + entry2.price * entry2.quantity) /
        (entry1.quantity + entry2.quantity);

      await updateAttribute(item, 'stoploss', item.stoploss);

      await log(item, {
        event: `Stoploss adjusted (3); new stoploss: ${item.stoploss}.`
      });

      resolve(item);
    }
  );
};

const adjustStoploss4 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const entry1 = item.transactions.filter(
        (element: any) => element.type === 'entry1'
      );
      const entry2 = item.transactions.filter(
        (element: any) => element.type === 'entry2'
      );
      const entry3 = item.transactions.filter(
        (element: any) => element.type === 'entry3'
      );
      item.stoploss =
        (entry1.price * entry1.quantity +
          entry2.price * entry2.quantity +
          entry3.price * entry3.quantity) /
        (entry1.quantity + entry2.quantity + entry3.quantity);

      await updateAttribute(item, 'stoploss', item.stoploss);

      await log(item, {
        event: `Stoploss adjusted (4); new stoploss: ${item.stoploss}.`
      });

      resolve(item);
    }
  );
};

const handleEntries = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const price = item.marketPrice;

      if (!item.fulfilledEntries.length && !item.fulfilledTargets.length) {
        // Entry1

        if (price <= item.entry[0] * (1 + priceTolerance)) {
          const quantityToBuy = item.quantity;

          const amount = quantityToBuy / price;

          if ((await marketBuy(item.currency, amount)) === null) {
            await log(item, {
              event: `Error buying on Entry1 quantityToBuy: ${quantityToBuy}, amount: ${amount}, price: ${price}.`
            });
            resolve(item);
            return;
          }

          item.fulfilledEntries.push(item.entry[0]);

          await updateAttribute(
            item,
            'fulfilledEntries',
            item.fulfilledEntries
          );

          await log(item, {
            event: `Entry1 hit; quantityToBuy: ${quantityToBuy}, amount: ${amount}, price: ${price}.`
          });

          item.transactions.push({
            type: 'entry1',
            quantity: quantityToBuy,
            price,
            timestamp: +new Date()
          });

          await updateAttribute(item, 'transactions', item.transactions);
        }
      } else if (
        item.fulfilledEntries.length === 1 &&
        !item.fulfilledTargets.length
      ) {
        // Entry2
        if (price <= item.entry[1] * (1 + priceTolerance)) {
          const quantityToBuy =
            (item.quantity * martingaleSteps[1]) / martingaleSteps[0];

          const amount = quantityToBuy / price;

          if ((await marketBuy(item.currency, amount)) === null) {
            await log(item, {
              event: `Error buying on Entry2 quantityToBuy: ${quantityToBuy}, amount: ${amount}, price: ${price}.`
            });
            resolve(item);
            return;
          }

          item.fulfilledEntries.push(item.entry[1]);

          await updateAttribute(
            item,
            'fulfilledEntries',
            item.fulfilledEntries
          );

          const remainingQuantity = item.remainingQuantity + quantityToBuy;
          await updateAttribute(item, 'remainingQuantity', remainingQuantity);

          await log(item, {
            event: `Entry2 hit; remainingQuantity: ${remainingQuantity}, quantityToBuy: ${quantityToBuy}, amount: ${amount}, price: ${price}.`
          });

          item.transactions.push({
            type: 'entry2',
            quantity: quantityToBuy,
            price,
            timestamp: +new Date()
          });
          await updateAttribute(item, 'transactions', item.transactions);

          await adjustStoploss3(item);
          await adjustTarget1(item);
        }
      } else if (
        item.fulfilledEntries.length === 2 &&
        !item.fulfilledTargets.length
      ) {
        // Entry3
        if (price <= item.entry[2] * (1 + priceTolerance)) {
          const quantityToBuy =
            (item.quantity * martingaleSteps[2]) / martingaleSteps[0];

          const amount = quantityToBuy / price;

          if ((await marketBuy(item.currency, amount)) === null) {
            await log(item, {
              event: `Error buying on Entry3 quantityToBuy: ${quantityToBuy}, amount: ${amount}, price: ${price}.`
            });
            resolve(item);
            return;
          }

          item.fulfilledEntries.push(item.entry[2]);

          await updateAttribute(
            item,
            'fulfilledEntries',
            item.fulfilledEntries
          );

          const remainingQuantity = item.remainingQuantity + quantityToBuy;
          await updateAttribute(item, 'remainingQuantity', remainingQuantity);

          await log(item, {
            event: `Entry3 hit; remainingQuantity: ${remainingQuantity}, quantityToBuy: ${quantityToBuy}, amount: ${amount}, price: ${price}.`
          });

          item.transactions.push({
            type: 'entry3',
            quantity: quantityToBuy,
            price,
            timestamp: +new Date()
          });
          await updateAttribute(item, 'transactions', item.transactions);

          await adjustStoploss4(item);
          await adjustTarget2(item);
        }
      }

      resolve(item);
    }
  );
};

const checkTargets = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const price = item.marketPrice;

      if (item.fulfilledEntries.length && !item.fulfilledTargets.length) {
        // Target1
        if (price >= item.target[0] * (1 - priceTolerance)) {
          const quantityToSell =
            (item.remainingQuantity * martingaleSteps[2]) / 100;

          const amount = quantityToSell / price;

          if ((await marketSell(item.currency, amount)) === null) {
            await log(item, {
              event: `Error selling on Target1 at price: ${price}, quantityToSell: ${quantityToSell}.`
            });
            resolve(item);
            return;
          }

          item.fulfilledTargets.push(item.target[0]);

          await updateAttribute(
            item,
            'fulfilledTargets',
            item.fulfilledTargets
          );

          const remainingQuantity = item.remainingQuantity - quantityToSell;
          await updateAttribute(item, 'remainingQuantity', remainingQuantity);

          await log(item, {
            event: `Target1 hit at price: ${price}, remainingQuantity: ${remainingQuantity}, quantityToSell: ${quantityToSell}.`
          });

          item.transactions.push({
            type: 'target1',
            quantity: quantityToSell,
            price,
            timestamp: +new Date()
          });

          await updateAttribute(item, 'transactions', item.transactions);
          await adjustStoploss1(item);
        }
      } else if (
        item.fulfilledEntries.length &&
        item.fulfilledTargets.length === 1
      ) {
        // Target2

        if (price >= item.target[1] * (1 - priceTolerance)) {
          const quantityToSell =
            (item.remainingQuantity * martingaleSteps[1]) / 100;

          const amount = quantityToSell / price;

          if ((await marketSell(item.currency, amount)) === null) {
            await log(item, {
              event: `Error selling on Target2 at price: ${price}, quantityToSell: ${quantityToSell}.`
            });
            resolve(item);
            return;
          }

          item.fulfilledTargets.push(item.target[1]);

          await updateAttribute(
            item,
            'fulfilledTargets',
            item.fulfilledTargets
          );

          const remainingQuantity = item.remainingQuantity - quantityToSell;
          await updateAttribute(item, 'remainingQuantity', remainingQuantity);

          await log(item, {
            event: `Target2 hit at price: ${price}, remainingQuantity: ${remainingQuantity}, quantityToSell: ${quantityToSell}.`
          });

          item.transactions.push({
            type: 'target2',
            quantity: quantityToSell,
            price,
            timestamp: +new Date()
          });

          await updateAttribute(item, 'transactions', item.transactions);
          await adjustStoploss2(item);
        }
      } else if (
        item.fulfilledEntries.length &&
        item.fulfilledTargets.length === 2
      ) {
        // Target3
        if (price >= item.target[3] * (1 - priceTolerance)) {
          const quantityToSell = item.remainingQuantity;

          const amount = quantityToSell / price;

          if ((await marketSell(item.currency, amount)) === null) {
            await log(item, {
              event: `Error selling on Target3 at price: ${price}, quantityToSell: ${quantityToSell}.`
            });
            resolve(item);
            return;
          }

          item.fulfilledTargets.push(item.target[2]);

          await updateAttribute(
            item,
            'fulfilledTargets',
            item.fulfilledTargets
          );

          const remainingQuantity = item.remainingQuantity - quantityToSell; // 0 quantity

          await log(item, {
            event: `Target3 hit at price: ${price}, remainingQuantity: ${remainingQuantity}, quantityToSell: ${quantityToSell}.`
          });

          item.transactions.push({
            type: 'target3',
            quantity: quantityToSell,
            price,
            timestamp: +new Date()
          });

          await updateAttribute(item, 'transactions', item.transactions);
          await updateAttribute(item, 'remainingQuantity', remainingQuantity);
        }
      }

      resolve(item);
    }
  );
};

const processBuy = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      item = await handleEntries(item);
      item = await checkTargets(item);
      resolve(item);
    }
  );
};

const checkSignalValidity = async (item: any): Promise<string> => {
  return new Promise(
    async (
      resolve: (value?: string | PromiseLike<string>) => void,
      reject: (reason?: any) => void
    ) => {
      if (
        // If we miss the Target1 before entering the trade, the signal becomes invalid.
        !item.fulfilledEntries.length &&
        item.marketPrice >= item.target[0]
      ) {
        await log(item, {
          event: `Signal expired due to missing the Target1 before entering the trade.`
        });
        await updateAttribute(item, 'expired', true);
        resolve('invalid');
      } else {
        resolve('valid');
      }
    }
  );
};

const checkStoploss = async (item: any): Promise<boolean> => {
  return new Promise(
    async (
      resolve: (value?: boolean | PromiseLike<boolean>) => void,
      reject: (reason?: any) => void
    ) => {
      const price = item.marketPrice;

      if (price <= item.stoploss * (1 + priceTolerance)) {
        await log(item, {
          event: `Signal expired due to stoploss hit.`
        });

        await updateAttribute(item, 'expired', true);

        const amount = item.remainingQuantity / price;

        if ((await marketSell(item.currency, amount)) === null) {
          await log(item, {
            event: `Error selling on Stoploss hit; remainingQuantity: ${item.remainingQuantity}, amount: ${amount}.`
          });
          resolve(true);
          return;
        }

        item.transactions.push({
          type: 'stoploss',
          quantity: item.remainingQuantity,
          price,
          timestamp: +new Date()
        });
        await updateAttribute(item, 'transactions', item.transactions);

        await log(item, {
          event: `Stoploss hit; remainingQuantity: ${item.remainingQuantity}, amount: ${amount}.`
        });

        resolve(true);
      } else {
        resolve(false);
      }
    }
  );
};

const processSignals = async (item: any): Promise<any> => {
  return new Promise(
    async (
      resolve: (value?: any | PromiseLike<any>) => void,
      reject: (reason?: any) => void
    ) => {
      if (item.position === 'buy') {
        if (await checkStoploss(item)) {
          resolve(item);
          return;
        }
        checkSignalValidity(item).then((status: string) => {
          if (status === 'valid') {
            processBuy(item).then(() => resolve(item));
          } else {
            resolve(item);
          }
        });
      } else {
        resolve(item);
      }
    }
  );
};
