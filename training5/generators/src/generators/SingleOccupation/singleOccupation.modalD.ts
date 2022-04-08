import {TrainingModalPage} from "../common";
import {
    additionalInfoFirstDD,
    additionalInfoSecondDD, listOccupationsDD,
    oneOccupationIncomeDetailsDD
} from "./singleOccupation.dataD";
import {HideButtonsCD} from "@focuson/forms/dist/src/buttons/hideButtonsCD";

export const additionalInfoFirstModalPD: TrainingModalPage = {
    name: 'AdditionalInfoFirstModal',
    pageType: 'ModalPage',
    modes: [ 'edit' ],
    display: { target: '~/tempForAdditionalInfoFirst', dataDD: additionalInfoFirstDD },
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    },
}

export const additionalInfoSecondModalPD: TrainingModalPage = {
    name: 'AdditionalInfoSecondModal',
    pageType: 'ModalPage',
    modes: [ 'edit' ],
    display: { target: '~/tempForAdditionalInfoSecond', dataDD: additionalInfoSecondDD},
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    },
}

export const listOccupationsModalPD: TrainingModalPage = {
    name: 'ListOccupationsModal',
    pageType: 'ModalPopup',
    modes: [ 'edit' ],
    display: { target: '~/occupation', dataDD: listOccupationsDD},
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    },
}

export const editOccupationIncomeSummaryModalPD: TrainingModalPage = {
    name: 'OccupationIncomeModal',
    pageType: 'ModalPage',
    modes: [ 'view', 'edit' ],
    display: { target: '~/tempForOccupationEdit', dataDD: oneOccupationIncomeDetailsDD },
    layout: { component: HideButtonsCD, displayParams: { hide: [ 'additionalInfoFirst', 'additionalInfoSecond', 'list' ] } },
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' },
        additionalInfoFirst: {
            by: { condition: "equals", path: '~/tempForOccupationEdit/areYou', value: `"E"`},
            guard: {
                control: 'ModalButton', modal: additionalInfoFirstModalPD, mode: 'view', focusOn: '~/tempForAdditionalInfoFirst',
                copy: { from: '~/fromApi/additionalInfoFirst' },
                copyOnClose: { to: '~/fromApi/additionalInfoFirst' } } },
        additionalInfoSecond: {
            by: { condition: "equals", path: '/MainOccupationDetailsPageSummary/tempForOccupationEdit/areYou', value: `"S"` },
            guard: {
                control: 'ModalButton', modal: additionalInfoSecondModalPD, mode: 'edit', focusOn: '~/tempForAdditionalInfoSecond',
                copy: { from: '~/fromApi/additionalInfoSecond' },
                copyOnClose: { to: '~/fromApi/additionalInfoSecond' } } },
        list: {
            control: 'ModalButton', modal: listOccupationsModalPD, mode: 'edit',
            focusOn: '~/fromApi/occupation',
            copy: [
                { from: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails/occupation', to: '~/fromApi/occupation/search' },
                { from: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails/occupation', to: '~/fromApi/occupation/selectedOccupationName' },
                { from: '~/fromApi/occupationsList', to: '~/fromApi/occupation/searchResults' },
            ],
            copyOnClose: [
                { from: '~/fromApi/occupation/selectedOccupationName', to: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails/occupation' },
            ] }
    }
}
