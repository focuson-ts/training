import { DBTable, Schema } from "@focuson/forms";

export const onlySchema: Schema = {
  name: "TheSchema"
}
export const addT: DBTable = {
  schema: onlySchema,
  name: 'ADD_TBL',
  description: '',
  notes: '',
  audit: { restActions: [ 'get' ], by: 'how we do the auditing' }
};
