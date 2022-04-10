import { TrainingMainPage } from "../common";
import { helloWorldDD } from "./helloWorld.dataD";
import { helloWorldRD } from "./helloWorld.restD";
import { IntParam } from "@focuson/forms";
import { dbNameParams } from "../tables";

export const HelloWorldPage: TrainingMainPage = {
  name: "HelloWorld",
  buttons: {},
  display: { target: '~/fromApi', dataDD: helloWorldDD },
  domain: { fromApi: { dataDD: helloWorldDD } },
  initialValue: 'empty',
  modals: [],
  modes: [ 'view' ],
  pageType: "MainPage",
  rest: { restDataRD: { rest: helloWorldRD, targetFromPath: '~/fromApi', fetcher: true } }
}