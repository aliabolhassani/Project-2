import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { createTable, putItem } from '../../libs/database';
const colors = require('colors/safe');

const registerOrders: ValidatedEventAPIGatewayProxyEvent<typeof schema> =
  async (event) => {
    // return formatJSONResponse({
    //   message: event.body,
    // });

    await createTable();

    // {
    // "origin": "mlTrader", // || "tradingView" || "bot"
    // "currency": "LINK/USDT",
    // "entry": [19.086, 18.233, 16.903],
    // "leverage": 1,
    // "market": "binance",
    // "position": "buy", // || "sell"
    // "stoploss": 15.536,
    // "target": [19.863, 20.709, 23.132]
    // "quantity": 1000,
    // "fulfilledEntries": [],
    // "fulfilledTargets": [],
    // "expired": false,
    // "strategy": 1,
    // }

    const orderId = await putItem({
      ...(<object>event.body),
      fulfilledEntries: [],
      fulfilledTargets: [],
      expired: false,
      timestamp: +new Date(),
      remainingQuantity: event.body['quantity'],
      transactions: []
    });

    // const info = await getItem(orderId);
    // console.log(colors.white(JSON.stringify(info, null, 2)));
    console.log(colors.white(orderId));

    return formatJSONResponse({
      message: event.body
    });
  };

export const main = middyfy(registerOrders);
