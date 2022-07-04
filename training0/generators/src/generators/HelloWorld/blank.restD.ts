import { TrainingRestD } from "../common";
import { RestParams, StringParam } from "@focuson/forms";
import { dbNameParams } from "../tables";
import { mandateDetailsDD, mandateDetailsTable, scratchPadDD } from "./blank.dataD";

export const blankParams: RestParams = {
  ...dbNameParams,

}

export const mandateSearchRD: TrainingRestD = {
  params: {...blankParams, mandateRef: { ...StringParam, lens: '~/mandateSearch/mandateRef', testValue: '1' }},
  dataDD: mandateDetailsTable,
  url: '/api/mandateSearch?{query}',
  actions: [ 'get' ],

}

export const scratchPadRD: TrainingRestD = {
  params: blankParams,
  dataDD: scratchPadDD,
  url: '/api/scratchpade?{query}',
  actions: [ 'get', 'update' ],

}