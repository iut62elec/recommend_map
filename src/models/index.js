// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Postdata } = initSchema(schema);

export {
  Postdata
};