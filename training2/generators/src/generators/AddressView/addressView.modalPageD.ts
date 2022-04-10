/* This is the modal page declaration */
import { TrainingModalPage } from "../common";
import { addressDD } from "./addressView.dataD";

export const addressViewModalPagePD: TrainingModalPage = {
    name: 'AddressViewModalPage',
    pageType: 'ModalPage',
    modes: [ 'edit' ],
    display: { target: 'temp', dataDD: addressDD},
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    }
}