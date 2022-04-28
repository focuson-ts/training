import { TrainingDataD } from "../common";
import { LayoutCd, NatNumDd, numberPrimDD, NumberPrimitiveDD, StringDD } from "@focuson/forms";
import { helloWorldTable } from "../tables";
import { InputNumberCD, SortCodeLayoutCD } from "../components";


export const SortCodeFragDD: NumberPrimitiveDD = {
  ...numberPrimDD,
  name: 'SortCodeFrag',
  description: "A two digit part of the sort code",
  display: InputNumberCD,
  // displayParams: { min: 0 , max: 99},
  sample: [ 10, 11, 12]
}

export const sortCodeDD: TrainingDataD = {
  name: 'SortCde',
  description: 'This is a summary about hello world domain data',
  layout: { component: SortCodeLayoutCD, displayParams: { label: 'This is the label' } },
  structure: {
    sc1: { dataDD: SortCodeFragDD, sample: [ 10 ] },
    sc2: { dataDD: SortCodeFragDD, sample: [ 11 ] },
    sc3: { dataDD: SortCodeFragDD, sample: [ 12 ] },
  }
}

export const helloWorldDD: TrainingDataD = {
  name: 'HelloWorldDomainData',
  description: 'This is a summary about hello world domain data',
  table: helloWorldTable,
  layout: { component: LayoutCd, displayParams: { details: '[[1]]' } },
  structure: {
    sortCode: { dataDD: sortCodeDD },
    message: { dataDD: StringDD, db: 'message', displayParams: { label: 'Hello world example' }, sample: [ 'Greetings message !' ] }
  }
}