import * as AWS from "aws-sdk";
import { AWSConfigs } from "../../AWSConfigs";
import { v4 as uuidv4 } from "uuid";

AWS.config.update({
  endpoint: AWSConfigs.endpoint,
  region: AWSConfigs.region,
  accessKeyId: AWSConfigs.accessKeyId,
  secretAccessKey: AWSConfigs.secretAccessKey,
} as any);

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

export const checkTable = (tableName: string, callback) => {
  const params = {
    TableName: tableName,
  };
  dynamodb.describeTable(params, (err) => {
    callback(!!err);
  });
};

export const getItem = (orderId: string): Promise<{}> => {
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
          ":orderId": orderId,
        },
      };
      docClient.query(query, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data["Items"][0]);
        }
      });
    }
  );
};

export const updateItem = (
  orderId: string,
  UpdateExpression: any,
  ExpressionAttributeNames: any,
  ExpressionAttributeValues: any
): Promise<boolean> => {
  return new Promise(
    (
      resolve: (value?: boolean | PromiseLike<boolean>) => void,
      reject: (reason?: any) => void
    ) => {
      const params = {
        TableName: "orders",
        Key: {
          orderId: orderId,
        },
        UpdateExpression,
        ExpressionAttributeNames,
        ExpressionAttributeValues,
        // UpdateExpression: "set testKey = :x, #leverage = :y",
        // ExpressionAttributeNames: {
        //   "#leverage": "leverage",
        // },
        // ExpressionAttributeValues: {
        //   ":x": someNewValue,
        //   ":y": 1000,
        // },
      };

      docClient.update(params, (err, data) => {
        if (err) {
          console.error(JSON.stringify(err, null, 2));
          reject(false);
        } else {
          resolve(true);
        }
      });
    }
  );
};

export const putItem = (content: object): Promise<string> => {
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

      docClient.put(docParams, (err) => {
        if (err) {
          reject(0);
        } else {
          resolve(orderId);
        }
      });
    }
  );
};

export const createTable = (): Promise<any> => {
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

export const deleteItem = (orderId: string): Promise<{}> => {
  return new Promise(
    (
      resolve: (value?: {} | PromiseLike<{}>) => void,
      reject: (reason?: any) => void
    ) => {
      const params = {
        TableName: "orders",
        Key: {
          orderId: orderId,
        },
      };

      docClient.delete(params, (err, data) => {
        if (err) {
          console.error(JSON.stringify(err, null, 2));
          reject(err);
        } else {
          resolve(data);
        }
      });
    }
  );
};
