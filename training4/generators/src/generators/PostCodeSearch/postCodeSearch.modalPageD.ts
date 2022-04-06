import { TrainingModalPage } from "../common";
import { postCodeSearchDataD } from "./postCodeSearch.dataD";

export const postCodeModalPagePD: TrainingModalPage = {
    name: "PostCodeModalPage",
    pageType: "ModalPopup",
    display: { dataDD: postCodeSearchDataD, target: '', importFrom: 'PostCodeMainPage' },
    modes: [ 'edit' ],
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    },
}