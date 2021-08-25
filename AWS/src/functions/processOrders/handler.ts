import "source-map-support/register";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import {
  checkTable,
  getItem,
  updateItem,
  deleteItem,
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

  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(processOrders);
