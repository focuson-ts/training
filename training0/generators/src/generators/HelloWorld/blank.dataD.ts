import { TrainingDataD } from "../common";
import { LayoutCd, StringDD } from "@focuson/forms";


export const blankDD: TrainingDataD = {
  name: 'HelloWorldDomainData',
  description: 'Just a place holder',
  layout: { component: LayoutCd, displayParams: { details: '[[1]]' } },
  structure: {
    helloWorld: { dataDD: {...StringDD, emptyValue: "Hello World"}, sample: [ 'Greetings message !' ] }
  }
}