import { DBTable } from "@focuson/forms/dist/src/common/resolverD";
import { onlySchema } from "@focuson/forms/dist/src/example/database/tableNames";
import { NameAnd } from "@focuson/utils";
import { CommonLensRestParam, StringParam } from "@focuson/forms/dist/src/common/restD";
import { IntParam } from "@focuson/forms";

export const helloWorldTable: DBTable = {
  schema: onlySchema,
  name: 'HELLO_WORLD',
  description: 'A table that holds the message',
  notes: 'We can put any comments we want here: this is documentation as code, so we should include any important notes',
  audit: { restActions: [ 'get' ], by: 'doesnt work yet, but this will do the auditing if you access the table' }
}


export const dbNameParams: NameAnd<CommonLensRestParam<any>> = {
  dbName: { ...StringParam, commonLens: 'dbName', testValue: 'mock' }
}
