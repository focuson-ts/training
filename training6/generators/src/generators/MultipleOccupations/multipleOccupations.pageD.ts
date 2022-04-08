import {TrainingMainPage} from "../common";
import {
    editOccupationIncomeSummaryModalPD
} from "./multipleOccupations.modalD";
import {
    fromApiDD,
    occupationAndIncomeFullDomainDD,
    multipleOccupationsIncomeDetailsDD, oneOccupationIncomeDetailsDD,
} from "./multipleOccupations.dataD";
import { occupationAndIncomeRD } from "./multipleOccupations.restD";
import { HideButtonsCD } from "@focuson/forms";

export const MainOccupationDetailsPageSummaryPD: TrainingMainPage = {
    name: 'MainOccupationDetailsPageSummary',
    pageType: 'MainPage',
    modes: [ 'view', 'edit' ],
    modals: [
        { modal: editOccupationIncomeSummaryModalPD },
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
        tempForOccupationEdit: { dataDD: multipleOccupationsIncomeDetailsDD }
    },
    rest: {
        occupationAndIncomeRD: { rest: occupationAndIncomeRD, targetFromPath: '~/fromApi/occupationAndIncome', fetcher: true }
    },
    layout: { component: HideButtonsCD, displayParams: { hide: [ 'additionalInfoFirst', 'additionalInfoSecond', 'otherSourcesOfIncome', 'list' ] } },
    buttons: {
        // TODO rest on commit
        edit: {
            control: 'ModalButton', modal: editOccupationIncomeSummaryModalPD, mode: 'edit',
            focusOn: '~/tempForOccupationEdit',
            copy: { from: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' },
            copyOnClose: { to: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' }
        },
        mainOrJoint: { control: "ToggleButton", value: 'mainOrJoint', buttonText: 'Showing {~/mainOrJoint|Main|Joint}' },
        nextOccupation: { control: 'ListNextButton', value: 'selectedItem', list: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' },
        prevOccupation: { control: 'ListPrevButton', value: 'selectedItem', list: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' },
        addEntry: {
            control: 'ModalButton', modal: editOccupationIncomeSummaryModalPD, mode: 'create', focusOn: '~/tempForOccupationEdit',
            restOnCommit: { restName: 'occupationAndIncomeRD',  action: 'create', result: 'refresh'},
            createEmpty: oneOccupationIncomeDetailsDD,
            setToLengthOnClose: { variable: '~/selectedItem', array: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' },
            // TODO copy on clone append ?
            // copyOnClose: { to: ['~/fromApi/occupationAndIncomecustomerOccupationIncomeDetails', '[append]'] }
        },
    }
}