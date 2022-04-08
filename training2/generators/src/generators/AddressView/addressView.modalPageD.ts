/* This is the modal page declaration */
import { TrainingModalPage } from "../common";
import { addressViewFullDomainDD } from "./addressView.dataD";

export const addressViewModalPagePD: TrainingModalPage = {
    name: 'AddressViewModalPage',
    pageType: 'ModalPage',
    modes: [ 'edit' ],
    /** How we display the page.*/
    display: { target: 'temp', dataDD: addressViewFullDomainDD},
    /** As well as displaying/editing the data we have these buttons. These are passed to layout */
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    }
}