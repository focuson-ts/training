import { TrainingDataD } from "../common";
import { LayoutCd, NatNumDd, numberPrimDD, NumberPrimitiveDD, StringDD } from "@focuson/forms";
import { helloWorldTable } from "../tables";
import { InputNumberCD, SortCodeLayoutCD } from "../components";




export const blankDD: TrainingDataD = {
  name: 'HelloWorldDomainData',
  description: 'Just a place holder',
  layout: { component: LayoutCd, displayParams: { details: '[[1]]' } },
  structure: {
    helloWorld: { dataDD: {...StringDD, emptyValue: "Hello World"}, sample: [ 'Greetings message !' ] }
  }
}