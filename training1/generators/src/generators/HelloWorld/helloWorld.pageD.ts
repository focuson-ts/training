import { TrainingMainPage } from "../common";
import {helloWorldDD} from "./helloWorld.dataD";
import {helloWorldRD} from "./helloWorld.restD";

export const HelloWorldPage: TrainingMainPage = {
    buttons: {},
    display: { target: '~/fromApi', dataDD: helloWorldDD },
    domain: { fromApi: { dataDD: helloWorldDD } },
    initialValue: 'empty',
    modals: [],
    modes: ['view'],
    name: "HelloWorldMainPage",
    pageType: "MainPage",
    rest: { restDataRD: { rest: helloWorldRD, targetFromPath: '~/fromApi', fetcher: true } }
}