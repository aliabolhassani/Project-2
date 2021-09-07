import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { checkTable, getAllItems } from '../../libs/database';
import * as colors from 'colors/safe';

const getOrders: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  // event.body = event.body || { ...event };

  const tableName = 'orders';

  checkTable(tableName, (response: boolean) => {
    if (response === true) {
      return formatJSONResponse({
        message: `Table is not yet initialized.`,
        event
      });
    }
  });

  const info = (await getAllItems())['Items'].map((item: any) => ({
    ...item,
    id: item.orderId
  }));

  // console.log(colors.white(info));

  return formatJSONResponse(info);
};

export const main = middyfy(getOrders);
