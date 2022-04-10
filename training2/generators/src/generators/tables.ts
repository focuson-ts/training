import { DBTable } from "@focuson/forms";

export const addT: DBTable = {
  schema: exports.onlySchema,
  name: 'ADD_TBL',
  description: '',
  notes: '',
  audit: { restActions: [ 'get' ], by: 'how we do the auditing' }
};
