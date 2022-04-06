import { TrainingMainPage } from "../common";
import { customerDetailsDD } from "./customerDetails.dataD";
import { customerDetailsRD } from "./customerDetails.restD";

export const CustomerDetailsPage: TrainingMainPage = {
    buttons: {},
    display: { target: '~/main', dataDD: customerDetailsDD },
    domain: { main: { dataDD: customerDetailsDD } },
    initialValue: {},
    modals: [],
    modes: ['view'],
    name: "CustomerDetailsMainPage",
    pageType: "MainPage",
    rest: { main: { rest: customerDetailsRD, targetFromPath: '~/main', fetcher: true } }
}