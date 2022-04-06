/** This is the 'bringing it all together */
import { TrainingMainPage } from "../common";
import { LayoutCd } from "@focuson/forms";
import { addressViewModalPagePD } from "./addressView.modalPageD";
import { addressViewRD } from "./addressView.restD";
import { addressViewFullDomainDD } from "./addressView.dataD";

/* This is the main page declaration */
export const addressViewMainPagePD: TrainingMainPage = {
    name: 'AddressViewMainPage',
    pageType: 'MainPage',
    modes: [ 'view' ],
    /** Here we need to declare what modal pages we have - make sure you use PD in naming */
    modals: [
        { modal: addressViewModalPagePD },
    ],
    display: { target: '~/fromApi', dataDD: addressViewFullDomainDD },
    /** When the page is selected for the first time this is the initial state */
    initialValue: {},
    /** This defines the domain data structures in react*/
    domain: {
        fromApi: { dataDD: addressViewFullDomainDD },
        temp: { dataDD: addressViewFullDomainDD }
    },
    /** Binds the rest to 'where it takes place'. So we have these rest actions, and the gui data is at the location defined by 'targetFromPath'. Fetcher 'true' means set up a fetcher to go get the data when the page is selected */
    rest: {
        addressViewRD: { rest: addressViewRD, targetFromPath: '~/fromApi', fetcher: true },
    },
    /** Example: [[3,3],[20]] => two rows, first row has two columns with three elements each, second row has one column with 20 elements */
    layout: { component: LayoutCd, displayParams: { details: '[[5]]' } },
    buttons: {
        edit: {
            control: 'ModalButton', modal: addressViewModalPagePD, mode: 'edit',
            focusOn: '~/temp',
            copy: [
                { from: '~/fromApi', to: '~/temp' },
            ],
            copyOnClose: [
                { from: '~/temp', to: '~/fromApi' },
            ],
            restOnCommit: { restName: 'addressViewRD', action: 'update', result: 'refresh' }
        }
    }
}
