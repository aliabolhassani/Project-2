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

const getPrice = async (currency: any): Promise<number> => {
  return new Promise(
    async (
      resolve: (value?: number | PromiseLike<number>) => void,
      reject: (reason?: any) => void
    ) => {
      // const price = 1000;
      console.log("Input price:");
      const price = parseInt(<string>await getKey(), 10);
      resolve(price);
    }
  );
};

const martingaleSteps = [15, 30, 55];
const buyTolerance = 1.005;

const handleEntries = async (item: any): Promise<{}> => {
  return new Promise(
    async (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      if (!item.fulfilledEntries.length) {
        // Entry1
        const price = await getPrice(item.currency);
        if (price <= item.entry[0] * buyTolerance) {
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
      } else if (item.fulfilledEntries.length === 1) {
        // Entry2
        const price = await getPrice(item.currency);
        if (price <= item.entry[1] * buyTolerance) {
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
        }
      } else if (item.fulfilledEntries.length === 2) {
        // Entry3
        const price = await getPrice(item.currency);
        if (price <= item.entry[2] * buyTolerance) {
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

      resolve(item);
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
        processBuy(item).then(() => resolve(item));
      } else {
        resolve(item);
      }
    }
  );
};
