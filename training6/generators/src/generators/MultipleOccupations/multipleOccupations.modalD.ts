import {TrainingModalPage} from "../common";
import {
    oneOccupationIncomeDetailsDD,
} from "./multipleOccupations.dataD";
import {HideButtonsCD} from "@focuson/forms/dist/src/buttons/hideButtonsCD";
import {LayoutCd} from "@focuson/forms";

export const editOccupationIncomeSummaryModalPD: TrainingModalPage = {
    name: 'OccupationIncomeModal',
    pageType: 'ModalPage',
    modes: [ 'view','create','edit' ],
    display: { target: '~/tempForOccupationEdit', dataDD: oneOccupationIncomeDetailsDD },
    layout: { component: LayoutCd, displayParams: { details: '[[30]]' } },
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    }
}
