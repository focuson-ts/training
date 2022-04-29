import { helloWorldDD } from "./helloWorld.dataD";
import { TrainingRestD } from "../common";
import { IntParam, RestParams } from "@focuson/forms";
import { dbNameParams } from "../tables";

export const helloWorldParams: RestParams = {
  ...dbNameParams,
  clientRef: { ...IntParam, commonLens: 'clientRef', testValue: '1' }
}

export const sampleRd: TrainingRestD = {
  params: helloWorldParams,
  dataDD: helloWorldDD,
  url: '/helloWorld?{query}',
  actions: [ 'get' ],

}