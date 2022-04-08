import { TrainingModalPage } from "../common";
import { postCodeSearchDataD } from "./postCodeSearch.dataD";

export const postCodeModalPagePD: TrainingModalPage = {
    name: "PostCodeModalPage",
    pageType: "ModalPopup",
    display: { dataDD: postCodeSearchDataD, target: ''},
    modes: [ 'edit' ],
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    },
}