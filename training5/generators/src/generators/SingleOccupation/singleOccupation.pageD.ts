import {TrainingMainPage} from "../common";
import {
    additionalInfoFirstModalPD, additionalInfoSecondModalPD, editOccupationIncomeSummaryModalPD,
    editOtherSourcesOfIncomeModalPD,
    listOccupationsModalPD,
} from "./singleOccupation.modalD";
import {
    additionalInfoFirstDD, additionalInfoSecondDD,
    fromApiDD,
    occupationAndIncomeFullDomainDD,
    oneOccupationIncomeDetailsDD, otherIncomeResponseDD,
} from "./singleOccupation.dataD";
import {
    additionalInfoFirstRD,
    additionalInfoSecondRD,
    occupationAndIncomeRD, occupationsListRD, otherSourcesOfIncomeRD
} from "./singleOccupation.restD";
import { HideButtonsCD } from "@focuson/forms";


export const MainOccupationDetailsPageSummaryPD: TrainingMainPage = {
    name: 'MainOccupationDetailsPageSummary',
    pageType: 'MainPage',
    modes: [ 'view', 'edit' ],
    modals: [
        { modal: editOccupationIncomeSummaryModalPD },
        { modal: additionalInfoFirstModalPD },
        { modal: additionalInfoSecondModalPD },
        { modal: editOtherSourcesOfIncomeModalPD },
        { modal: listOccupationsModalPD },
    ],
    display: { target: '~/fromApi/occupationAndIncome', dataDD: occupationAndIncomeFullDomainDD },
    initialValue: {
        occupation: {
            search: '',
            selectedOccupationName: '',
            searchResults: [],
        },
    },
    domain: {
        fromApi: { dataDD: fromApiDD },
        tempForOccupationEdit: { dataDD: oneOccupationIncomeDetailsDD },
        tempForAdditionalInfoFirst: { dataDD: additionalInfoFirstDD },
        tempForAdditionalInfoSecond: { dataDD: additionalInfoSecondDD },
        tempForOtherSourcesOfIncome: { dataDD: otherIncomeResponseDD }
    },
    rest: {
        occupationAndIncomeRD: { rest: occupationAndIncomeRD, targetFromPath: '~/fromApi/occupationAndIncome', fetcher: true },
        additionalInfoFirstRD: { rest: additionalInfoFirstRD, targetFromPath: '~/fromApi/additionalInfoFirst', fetcher: true },
        additionalInfoSecondRD: { rest: additionalInfoSecondRD, targetFromPath: '~/fromApi/additionalInfoSecond', fetcher: true },
        otherSourcesOfIncomeRD: { rest: otherSourcesOfIncomeRD, targetFromPath: '~/fromApi/otherSourcesOfIncome', fetcher: true },
        occupationsListRD: { rest: occupationsListRD, targetFromPath: '~/fromApi/occupationsList', fetcher: true },
    },
    layout: { component: HideButtonsCD, displayParams: { hide: [ 'additionalInfoFirst', 'additionalInfoSecond', 'otherSourcesOfIncome', 'list' ] } },
    buttons: {
        // TODO rest on commit
        edit: {
            control: 'ModalButton', modal: editOccupationIncomeSummaryModalPD, mode: 'edit',
            focusOn: '~/tempForOccupationEdit',
            copy: { from: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' },
            copyOnClose: { to: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' }
        }
    }
}