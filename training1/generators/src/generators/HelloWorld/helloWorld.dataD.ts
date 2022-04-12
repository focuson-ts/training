import { TrainingDataD } from "../common";
import { IntegerDD, LayoutCd, StringDD } from "@focuson/forms";
import { helloWorldTable } from "../tables";


export const helloWorldFromApiDD: TrainingDataD = {
  name: 'HelloWorldFromApi',
  description: 'This is the data that comes from the api',
  table: helloWorldTable,
  structure: {
    message: { dataDD: StringDD, db: 'message', displayParams: { label: 'Hello world example' }, sample: [ 'Greetings message !' ] } }
}


export const helloWorldDD: TrainingDataD = {
  name: 'HelloWorldMain',
  description: 'This is all the domain data, including the clientRef and the data that came from the api',
  table: helloWorldTable,
  layout: { component: LayoutCd, displayParams: {details: '[[1,1]]'} },
  structure: {
    clientRef: { dataDD: IntegerDD },
    fromApi: { dataDD: helloWorldFromApiDD }
  }
}