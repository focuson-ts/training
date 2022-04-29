import { TrainingMainPage } from "../common";
import { blankDD } from "./blank.dataD";

export const BlankProjectPD: TrainingMainPage = {
  name: "BlankProjectPage",
  buttons: {},
  display: { target: '~/fromApi', dataDD: blankDD },
  domain: { fromApi: { dataDD: blankDD } },
  initialValue: 'empty',
  modals: [],
  modes: [ 'view' ],
  pageType: "MainPage",
  rest: {}
}