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
import {BooleanDD, HideButtonsCD, IntegerDD} from "@focuson/forms";
import {
    listOccupationsDD
} from "@focuson/training5_single_occupation/src/generators/SingleOccupation/singleOccupation.dataD";

export const MainOccupationDetailsPageSummaryPD: TrainingMainPage = {
    name: 'MainOccupationDetailsPageSummary',
    pageType: 'MainPage',
    modes: [ 'view', 'edit' ],
    modals: [
        { modal: editOccupationIncomeSummaryModalPD },
    ],
    display: { target: '~/fromApi/occupationAndIncome', dataDD: occupationAndIncomeFullDomainDD },
    initialValue: {
        selectedItem: 0,
        mainOrJoint: false
    },
    variables: {
        selected: {
            constructedBy: 'code',
            code: "id => id.focusQuery ( 'MainOccupationDetailsPageSummary' ).focusQuery ( 'selectedItem' )"
        },
        currentOccupation: {
            constructedBy: 'code',
            code: `id => id.focusQuery ( 'MainOccupationDetailsPageSummary' ).focusQuery ( 'fromApi' ).focusQuery ( 'occupationAndIncome' ).focusQuery ( 'customerOccupationIncomeDetails' )`
        },
    },
    domain: {
        selectedItemForMain: { dataDD: IntegerDD },
        selectedItemForJoin: { dataDD: IntegerDD },
        fromApi: { dataDD: fromApiDD },
        tempForOccupationEdit: { dataDD: multipleOccupationsIncomeDetailsDD },
        mainOrJoint: { dataDD: BooleanDD },
        searchList: { dataDD: listOccupationsDD },
    },
    rest: {
        occupationAndIncomeRD: { rest: occupationAndIncomeRD, targetFromPath: '~/fromApi/occupationAndIncome', fetcher: true }
    },
    layout: { component: HideButtonsCD, displayParams: { hide: [ 'additionalInfoFirst', 'additionalInfoSecond', 'otherSourcesOfIncome', 'list' ] } },

    buttons: {
        edit: {
            control: 'ModalButton', modal: editOccupationIncomeSummaryModalPD, mode: 'edit',
            focusOn: '~/temp',
            copy: { from: '#currentOccupation[#selected]' },
            copyOnClose: { to: '#currentOccupation[#selected]' }
        },
        mainOrJoint: { control: "ToggleButton", value: '~/mainOrJoint', buttonText: 'Showing {~/mainOrJoint|Main|Joint}' },
        nextOccupation: { control: 'ListNextButton', value: '#selected', list: '#currentOccupation' },
        prevOccupation: { control: 'ListPrevButton', value: '#selected', list: '#currentOccupation' },
        addEntry: {
            control: 'ModalButton', modal: editOccupationIncomeSummaryModalPD, mode: 'create', focusOn: '~/tempForOccupationEdit',
            restOnCommit: { restName: 'occupationAndIncomeRD',  action: 'create', result: 'refresh'},
            createEmpty: oneOccupationIncomeDetailsDD,
            setToLengthOnClose: { variable: '~/selectedItem', array: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails' },
            copyOnClose: { to: '~/fromApi/occupationAndIncome/customerOccupationIncomeDetails/[$append]' }
        },
    }
}