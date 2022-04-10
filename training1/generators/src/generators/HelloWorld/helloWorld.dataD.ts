import {  TrainingDataD } from "../common";
import {StringDD} from "@focuson/forms";
import { helloWorldTable } from "../tables";


export const helloWorldDD: TrainingDataD = {
    name: 'HelloWorld',
    description: 'This is a summary about hello world domain data',
    table:helloWorldTable,
    structure: { message: { dataDD: StringDD, db: 'message' ,displayParams: { label: 'Hello world example'}, sample: [ 'Greetings message !' ] } }
}