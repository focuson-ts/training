import {helloWorldDD} from "./helloWorld.dataD";
import { commonParams, TrainingRestD } from "../common";
import {RestD} from "@focuson/forms";

export const helloWorldRD: TrainingRestD = {
    params: { ...commonParams },
    dataDD: helloWorldDD,
    url: '/helloWorld?{query}',
    actions: [ 'get' ],
}