import "source-map-support/register";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import {
  checkTable,
  getItem,
  updateItem,
  deleteItem,
  getValidItems,
} from "../../libs/database";
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

  for (let validItem of <any>validItems) {
    let ww = await processSignals(validItem);

    console.log(">>>", colors.white(ww));
  }

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

      // stdin.setRawMode(true);

      // resume stdin in the parent process (node app won't quit all by itself
      // unless an error or process.exit() happens)
      // stdin.resume();
      stdin.setEncoding("utf8");
      stdin.once("data", function (key) {
        // write the key to stdout all normal like
        // process.stdout.write(key);
        // stdin.setRawMode(false);
        // process.exit.bind(process, 0);
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
      const price = await getPrice("handleEntries", item.currency);

      if (!item.fulfilledEntries.length) {
        // Entry1
        if (price <= item.entry[0] * (1 + priceTolerance)) {
          await buyOrder(item.currency, item.amount);
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
          await buyOrder(
            item.currency,
            (item.amount * martingaleSteps[1]) / martingaleSteps[0]
          );
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

          await adjustTarget1(item);
          await adjustStoploss3(item);
        }
      } else if (
        item.fulfilledEntries.length === 2 &&
        !item.fulfilledTargets.length
      ) {
        // Entry3
        if (price <= item.entry[2] * (1 + priceTolerance)) {
          await buyOrder(
            item.currency,
            (item.amount * martingaleSteps[2]) / martingaleSteps[0]
          );
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
      const price = await getPrice("checkTargets", item.currency);

      if (item.fulfilledEntries.length && !item.fulfilledTargets.length) {
        // Target1
        if (price >= item.target[0] * (1 - priceTolerance)) {
          await sellOrder(
            item.currency,
            (item.amount * martingaleSteps[0]) / martingaleSteps[0] /// <<<<============ use modifiedAmount
          );
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

          await adjustStoploss1(item);
        }
      } else if (
        item.fulfilledEntries.length &&
        item.fulfilledTargets.length === 1
      ) {
        // Target2
        if (price >= item.target[1] * (1 - priceTolerance)) {
          await sellOrder(
            item.currency,
            (item.amount * martingaleSteps[1]) / martingaleSteps[0] /// <<<<============ use modifiedAmount
          );
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

          await adjustStoploss2(item);
        }
      } else if (
        item.fulfilledEntries.length &&
        item.fulfilledTargets.length === 2
      ) {
        // Target3
        if (price >= item.target[3] * (1 - priceTolerance)) {
          await sellOrder(
            item.currency,
            (item.amount * martingaleSteps[2]) / martingaleSteps[0] /// <<<<============ use modifiedAmount
          );
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
      resolve("valid");
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
