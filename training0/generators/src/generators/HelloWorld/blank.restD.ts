import { TrainingRestD } from "../common";
import { IntParam, RestParams } from "@focuson/forms";
import { dbNameParams } from "../tables";
import { blankDD } from "./blank.dataD";

export const blankParams: RestParams = {
  ...dbNameParams,
  clientRef: { ...IntParam, commonLens: 'clientRef', testValue: '1' }
}

export const sampleRd: TrainingRestD = {
  params: blankParams,
  dataDD: blankDD,
  url: '/helloWorld?{query}',
  actions: [ 'get' ],

}