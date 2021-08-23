import "source-map-support/register";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";
import * as AWS from "aws-sdk";
import { AWSConfigs } from "../../../AWSConfigs";
import { v4 as uuidv4 } from "uuid";
const colors = require("colors/safe");

const registerOrders: ValidatedEventAPIGatewayProxyEvent<typeof schema> =
  async (event) => {
    await createTable();

    // {
    //   "origin": "mlTrader", // || "tradingView" || "bot"
    //   "currency": "LINK/USDT",
    //   "entry": [19.086, 18.233, 16.903],
    //   "margin": 1,
    //   "market": "binance",
    //   "position": "buy", // || "sell"
    //   "stoploss": 15.536,
    //   "target": [19.863, 20.709, 23.132]
    // }
    
    const orderId = await putItem({
      ...event.body,
    });

    const info = await getItem(orderId);
    console.log(colors.white(JSON.stringify(info, null, 2)));

    return formatJSONResponse({
      message: event.body,
    });
  };

export const main = middyfy(registerOrders);

AWS.config.update({
  endpoint: AWSConfigs.endpoint,
  region: AWSConfigs.region,
  accessKeyId: AWSConfigs.accessKeyId,
  secretAccessKey: AWSConfigs.secretAccessKey,
} as any);

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

const checkTable = (tableName, callback) => {
  const params = {
    TableName: tableName,
  };
  dynamodb.describeTable(params, (err) => {
    callback(!!err);
  });
};

const createTable = (): Promise<any> => {
  const tableName = "orders";

  return new Promise(
    (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      checkTable(tableName, (response: boolean) => {
        if (response === true) {
          const params = {
            TableName: tableName,
            KeySchema: [{ AttributeName: "orderId", KeyType: "HASH" }],
            AttributeDefinitions: [
              { AttributeName: "orderId", AttributeType: "S" },
            ],
            ProvisionedThroughput: {
              ReadCapacityUnits: 1000,
              WriteCapacityUnits: 1000,
            },
          };

          dynamodb.createTable(params, (err, data: {}) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        } else {
          resolve(null);
        }
      });
    }
  );
};

const putItem = (content: object): Promise<string> => {
  return new Promise(
    (
      resolve: (value?: string | PromiseLike<string>) => void,
      reject: (reason?: any) => void
    ) => {
      const orderId = uuidv4();

      const docParams = {
        TableName: "orders",
        Item: {
          orderId: orderId,
          ...content,
        },
      };

      docClient.put(docParams, function (err) {
        if (err) {
          reject(0);
        } else {
          resolve(orderId);
        }
      });
    }
  );
};

const getItem = (postId: string): Promise<{}> => {
  return new Promise(
    (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const query = {
        TableName: "orders",
        KeyConditionExpression: "#id = :orderId",
        ExpressionAttributeNames: {
          "#id": "orderId",
        },
        ExpressionAttributeValues: {
          ":orderId": postId,
        },
      };
      docClient.query(query, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data["Items"][0]);
        }
      });
    }
  );
};
