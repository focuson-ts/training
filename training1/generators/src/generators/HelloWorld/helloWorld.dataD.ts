import { TrainingDataD } from "../common";
import {LayoutCd, StringDD} from "@focuson/forms";
import { helloWorldTable } from "../tables";

export const helloWorldDD: TrainingDataD = {
    name: 'HelloWorldDomainData',
    description: 'This is a summary about hello world domain data',
    table: helloWorldTable,
    layout: { component: LayoutCd, displayParams: { details: '[[1]]'}},
    structure: {
        message: { dataDD: StringDD, db: 'message', displayParams: { label: 'Hello world example'}, sample: [ 'Greetings message !' ] } }
}