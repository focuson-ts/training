import { TrainingMainPage } from "../common";
import { helloWorldDD } from "./helloWorld.dataD";
import { helloWorldRD } from "./helloWorld.restD";

export const HelloWorldPage: TrainingMainPage = {
  name: "HelloWorld",
  buttons: {},
  display: { target: '~/main', dataDD: helloWorldDD },
  domain: { main: { dataDD: helloWorldDD } },
  initialValue: 'empty',
  modals: [],
  modes: [ 'edit' ],
  pageType: "MainPage",
  rest: {
    restDataRD: { rest: helloWorldRD, targetFromPath: '~/main/fromApi', fetcher: true } }
}