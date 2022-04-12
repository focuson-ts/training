import { helloWorldDD, helloWorldFromApiDD } from "./helloWorld.dataD";
import { TrainingRestD } from "../common";
import { IntParam, RestParams } from "@focuson/forms";
import { helloWorldSql } from "./helloWorld.sql";
import { dbNameParams, helloWorldTable } from "../tables";

export const helloWorldParams: RestParams = {
  ...dbNameParams,
  clientRef: { ...IntParam, lens: '~/main/clientRef', testValue: '1' },
  brandId: { ...IntParam, commonLens: 'brandId', testValue: '2' }
}

export const helloWorldRD: TrainingRestD = {
  params: helloWorldParams,
  dataDD: helloWorldFromApiDD,
  url: '/helloWorld?{query}',
  actions: [ 'get' ],
  initialSql: helloWorldSql,
  tables: {
    where: [
      { table: helloWorldTable, alias: helloWorldTable.name, field: 'acc_id', paramName: 'clientRef' } ],
    entity: {
      type: 'Main',
      table: helloWorldTable,
    }
  }
}