import "source-map-support/register";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { checkTable, updateItem, getValidItems } from "../../libs/database";
const colors = require("colors/safe");

import schema from "./schema";

const processOrders: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const tableName = "orders";

  checkTable(tableName, (response: boolean) => {
    if (response === true) {
      return formatJSONResponse({
        message: `Table is not yet initialized.`,
        event,
      });
    }
  });

  // await updateItem(
  //   "b8241150-d87d-47fc-8ec2-bbbb45f3ceed",
  //   "set testKeyYY = :x, #leverage = :y",
  //   {
  //     "#leverage": "leverage",
  //   },
  //   {
  //     ":x": "XXsomeNewValueXX",
  //     ":y": 13550,
  //   }
  // );
  // await deleteItem("3b3999e7-420e-4563-a7e9-9fc7c23bd30f");

  const validItems = await getValidItems();

  for (const validItem of <any>validItems) {
    validItem.marketPrice = await getPrice("marketPrice", validItem.currency);
    let ww = await processSignals(validItem);

    console.log(">>>", colors.white(ww));
  }

  setTimeout(() => process.exit(), 0);

  return formatJSONResponse({
    message: `Process completed.`,
    event,
  });
};

export const main = middyfy(processOrders);

// const xxx = async (item: any): Promise<{}> => {
//   return new Promise(
//     async (
//       resolve: (value?: {} | PromiseLike<{}>) => void,
//       reject: (reason?: any) => void
//     ) => {
//       // console.log(colors.white(item));
//       resolve(item);
//     }
//   );
// };

const getKey = async (): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const stdin = process.stdin;
      stdin.setEncoding("utf8");
      stdin.once("data", function (key) {
        resolve(key);
      });
    }
  );
};

const buyOrder = async (currency: string, amount: number): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const id = Math.random();
      resolve(id);
    }
  );
};

const sellOrder = async (currency: string, amount: number): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const id = Math.random();
      resolve(id);
    }
  );
};

const getPrice = async (text, currency: any): Promise<number> => {
  return new Promise(
    async (
      resolve: (value?: number | PromiseLike<number>) => void,
      reject: (reason?: any) => void
    ) => {
      // const price = 1000;
      console.log(colors.white(text));
      const price = parseInt(<string>await getKey(), 10);
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
      resolve({});
    }
  );
};

const adjustTarget2 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      resolve({});
    }
  );
};

const adjustStoploss1 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      resolve({});
    }
  );
};

const adjustStoploss2 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      resolve({});
    }
  );
};

const adjustStoploss3 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      resolve({});
    }
  );
};

const adjustStoploss4 = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      resolve({});
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
          const amountToBuy = item.amount;
          await buyOrder(item.currency, amountToBuy);

          item.fulfilledEntries.push(price);

          console.log(colors.magenta("Entry1 fulfilled."));

          await updateItem(
            item.orderId,
            "set #fulfilledEntries = :x",
            {
              "#fulfilledEntries": "fulfilledEntries",
            },
            {
              ":x": item.fulfilledEntries,
            }
          );
        }
      } else if (
        item.fulfilledEntries.length === 1 &&
        !item.fulfilledTargets.length
      ) {
        // Entry2
        if (price <= item.entry[1] * (1 + priceTolerance)) {
          const amountToBuy =
            (item.amount * martingaleSteps[1]) / martingaleSteps[0];
          await buyOrder(item.currency, amountToBuy);

          item.fulfilledEntries.push(price);

          console.log(colors.magenta("Entry2 fulfilled."));

          await updateItem(
            item.orderId,
            "set #fulfilledEntries = :x",
            {
              "#fulfilledEntries": "fulfilledEntries",
            },
            {
              ":x": item.fulfilledEntries,
            }
          );

          const remainingAmount = item.remainingAmount + amountToBuy;
          await updateItem(
            item.orderId,
            "set #remainingAmount = :x",
            {
              "#remainingAmount": "remainingAmount",
            },
            {
              ":x": remainingAmount,
            }
          );

          await adjustTarget1(item);
          await adjustStoploss3(item);
        }
      } else if (
        item.fulfilledEntries.length === 2 &&
        !item.fulfilledTargets.length
      ) {
        // Entry3
        if (price <= item.entry[2] * (1 + priceTolerance)) {
          const amountToBuy =
            (item.amount * martingaleSteps[2]) / martingaleSteps[0];
          await buyOrder(item.currency, amountToBuy);

          item.fulfilledEntries.push(price);

          console.log(colors.magenta("Entry3 fulfilled."));

          await updateItem(
            item.orderId,
            "set #fulfilledEntries = :x",
            {
              "#fulfilledEntries": "fulfilledEntries",
            },
            {
              ":x": item.fulfilledEntries,
            }
          );

          const remainingAmount = item.remainingAmount + amountToBuy;
          await updateItem(
            item.orderId,
            "set #remainingAmount = :x",
            {
              "#remainingAmount": "remainingAmount",
            },
            {
              ":x": remainingAmount,
            }
          );

          await adjustTarget2(item);
          await adjustStoploss4(item);
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
          const amountToSell =
            (item.remainingAmount * martingaleSteps[2]) / 100;
          await sellOrder(item.currency, amountToSell);
          item.fulfilledTargets.push(price);

          console.log(colors.magenta("Target1 fulfilled."));

          await updateItem(
            item.orderId,
            "set #fulfilledTargets = :x",
            {
              "#fulfilledTargets": "fulfilledTargets",
            },
            {
              ":x": item.fulfilledTargets,
            }
          );

          const remainingAmount = item.remainingAmount - amountToSell;

          await updateItem(
            item.orderId,
            "set #remainingAmount = :x",
            {
              "#remainingAmount": "remainingAmount",
            },
            {
              ":x": remainingAmount,
            }
          );

          await adjustStoploss1(item);
        }
      } else if (
        item.fulfilledEntries.length &&
        item.fulfilledTargets.length === 1
      ) {
        // Target2

        if (price >= item.target[1] * (1 - priceTolerance)) {
          const amountToSell =
            (item.remainingAmount * martingaleSteps[1]) / 100;
          await sellOrder(item.currency, amountToSell);
          item.fulfilledTargets.push(price);

          console.log(colors.magenta("Target2 fulfilled."));

          await updateItem(
            item.orderId,
            "set #fulfilledTargets = :x",
            {
              "#fulfilledTargets": "fulfilledTargets",
            },
            {
              ":x": item.fulfilledTargets,
            }
          );

          const remainingAmount = item.remainingAmount - amountToSell;

          await updateItem(
            item.orderId,
            "set #remainingAmount = :x",
            {
              "#remainingAmount": "remainingAmount",
            },
            {
              ":x": remainingAmount,
            }
          );

          await adjustStoploss2(item);
        }
      } else if (
        item.fulfilledEntries.length &&
        item.fulfilledTargets.length === 2
      ) {
        // Target3

        if (price >= item.target[3] * (1 - priceTolerance)) {
          // const amountToSell = (item.remainingAmount * martingaleSteps[0]) / 100;    // Alternative way
          const amountToSell = item.remainingAmount;

          await sellOrder(item.currency, amountToSell);
          item.fulfilledTargets.push(price);

          console.log(colors.magenta("Target3 fulfilled."));

          await updateItem(
            item.orderId,
            "set #fulfilledTargets = :x",
            {
              "#fulfilledTargets": "fulfilledTargets",
            },
            {
              ":x": item.fulfilledTargets,
            }
          );

          const remainingAmount = item.remainingAmount - amountToSell; // 0 amount

          await updateItem(
            item.orderId,
            "set #remainingAmount = :x",
            {
              "#remainingAmount": "remainingAmount",
            },
            {
              ":x": remainingAmount,
            }
          );
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
        await updateItem(
          item.orderId,
          "set #expired = :x",
          {
            "#expired": "expired",
          },
          {
            ":x": true,
          }
        );
        resolve("invalid");
      } else {
        resolve("valid");
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
        await updateItem(
          item.orderId,
          "set #expired = :x",
          {
            "#expired": "expired",
          },
          {
            ":x": true,
          }
        );
        await sellOrder(item.currency, item.remainingAmount);
        resolve(true);
      } else {
        resolve(false);
      }
    }
  );
};

const processSignals = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      if (item.position === "buy") {
        if (checkStoploss(item)) {
          resolve(item);
          return;
        }
        checkSignalValidity(item).then((status: string) => {
          if (status === "valid") {
            processBuy(item).then(() => resolve(item));
          }
        });
      } else {
        resolve(item);
      }
    }
  );
};
