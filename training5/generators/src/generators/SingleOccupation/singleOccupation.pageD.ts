import {TrainingMainPage} from "../common";
import {
    additionalInfoFirstModalPD, additionalInfoSecondModalPD, editOccupationIncomeSummaryModalPD,
    listOccupationsModalPD,
} from "./singleOccupation.modalD";
import {
    additionalInfoFirstDD, additionalInfoSecondDD,
    fromApiDD,
    occupationAndIncomeFullDomainDD,
    oneOccupationIncomeDetailsDD,
} from "./singleOccupation.dataD";
import {
    additionalInfoFirstRD,
    additionalInfoSecondRD,
    occupationAndIncomeRD, occupationsListRD
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
    },
    rest: {
        occupationAndIncomeRD: { rest: occupationAndIncomeRD, targetFromPath: '~/fromApi/occupationAndIncome', fetcher: true },
        additionalInfoFirstRD: { rest: additionalInfoFirstRD, targetFromPath: '~/fromApi/additionalInfoFirst', fetcher: true },
        additionalInfoSecondRD: { rest: additionalInfoSecondRD, targetFromPath: '~/fromApi/additionalInfoSecond', fetcher: true },
        occupationsListRD: { rest: occupationsListRD, targetFromPath: '~/fromApi/occupationsList', fetcher: true },
    },
    layout: { component: HideButtonsCD, displayParams: { hide: [ 'additionalInfoFirst', 'additionalInfoSecond', 'list' ] } },
    buttons: {
        edit: {
            control: 'ModalButton', modal: editOccupationIncomeSummaryModalPD, mode: 'edit',
            focusOn: '~/tempForOccupationEdit',
            copy: { from: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' },
            // copyOnClose: { to: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' },
            restOnCommit: { restName: 'occupationAndIncomeRD',  action: 'update', result: 'refresh'},
        },
        additionalInfoFirst: {
            by: { condition: "equals", path: '~/tempForOccupationEdit/areYou', value: `"E"`},
            guard: {
                control: 'ModalButton', modal: additionalInfoFirstModalPD, mode: 'view', focusOn: '~/tempForAdditionalInfoFirst',
                copy: { from: '~/fromApi/additionalInfoFirst' },
                copyOnClose: { to: '~/fromApi/additionalInfoFirst' } } },
        additionalInfoSecond: {
            by: { condition: "equals", path: '~/tempForOccupationEdit/areYou', value: `"S"` },
            guard: {
                control: 'ModalButton', modal: additionalInfoSecondModalPD, mode: 'edit', focusOn: '~/tempForAdditionalInfoSecond',
                copy: { from: '~/fromApi/additionalInfoSecond' },
                copyOnClose: { to: '~/fromApi/additionalInfoSecond' } } },
    }
}