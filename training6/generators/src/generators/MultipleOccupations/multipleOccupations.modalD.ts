import {TrainingModalPage} from "../common";
import {
    oneOccupationIncomeDetailsDD,
} from "./multipleOccupations.dataD";
import {HideButtonsCD} from "@focuson/forms/dist/src/buttons/hideButtonsCD";

export const editOccupationIncomeSummaryModalPD: TrainingModalPage = {
    name: 'OccupationIncomeModal',
    pageType: 'ModalPage',
    modes: [ 'view','create','edit' ],
    display: { target: '~/tempForOccupationEdit', dataDD: oneOccupationIncomeDetailsDD },
    layout: { component: HideButtonsCD, displayParams: { hide: [ 'additionalInfoFirst', 'additionalInfoSecond', 'otherSourcesOfIncome', 'list' ] } },
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    }
}
