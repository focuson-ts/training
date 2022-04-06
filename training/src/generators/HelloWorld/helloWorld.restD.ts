import {helloWorldDD} from "./helloWorld.dataD";
import {commonParams} from "../common";
import {RestD} from "@focuson/forms";

export const helloWorldRD: RestD<any> = {
    params: { ...commonParams },
    dataDD: helloWorldDD,
    url: '/helloWorld?{query}',
    actions: [ 'get' ],
}