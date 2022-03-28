import { ExampleMainPage } from "../common";
import {helloWorldDD} from "./helloWorld.dataD";
import {helloWorldRD} from "./helloWorld.restD";

export const HelloWorldPage: ExampleMainPage = {
    buttons: {},
    display: { target: [ 'fromApi' ], dataDD: helloWorldDD },
    domain: { fromApi: { dataDD: helloWorldDD } },
    initialValue: {},
    modals: [],
    modes: ['view'],
    name: "HelloWorldMainPage",
    pageType: "MainPage",
    rest: { dropdownsRD: { rest: helloWorldRD, targetFromPath: [ 'fromApi' ], fetcher: true } }

}