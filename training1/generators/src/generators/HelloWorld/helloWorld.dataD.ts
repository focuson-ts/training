import {TrainingDataD} from "../common";
import {StringDD} from "@focuson/forms";

export const helloWorldDD: TrainingDataD = {
    name: 'HelloWorldDomainData',
    description: 'This is a summary about hello world domain data',
    structure: { message: { dataDD: StringDD, displayParams: { label: 'Hello world example'}, sample: [ 'Greetings message !' ] } }
}