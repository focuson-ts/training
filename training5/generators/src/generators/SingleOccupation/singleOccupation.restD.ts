import {RestD} from "@focuson/forms";
import {commonParams} from "../common";
import {
    additionalInfoFirstDD,
    additionalInfoSecondDD,
    listOccupationsDD,
    occupationAndIncomeFullDomainDD, otherIncomeResponseDD
} from "./singleOccupation.dataD";

export const occupationAndIncomeRD: RestD<any> = {
    params: { ...commonParams },
    dataDD: occupationAndIncomeFullDomainDD,
    url: '/customer/occupation/v2/occupationIncomeDetails?{query}',
    actions: [ 'get', 'update' ],
}

export const additionalInfoFirstRD: RestD<any> = {
    params: { ...commonParams },
    dataDD: additionalInfoFirstDD,
    url: '/customer/occupation/v2/additionalInfoFirst?{query}',
    actions: [ 'get', 'update' ],
}

export const additionalInfoSecondRD: RestD<any> = {
    params: { ...commonParams },
    dataDD: additionalInfoSecondDD,
    url: '/customer/occupation/v2/additionalInfoSecond?{query}',
    actions: [ 'get', 'update' ],
}

export const otherSourcesOfIncomeRD: RestD<any> = {
    params: { ...commonParams },
    dataDD: otherIncomeResponseDD,
    url: '/customer/occupation/v2/otherIncome?{query}',
    actions: [ 'get', 'update' ],
}

export const occupationsListRD: RestD<any> = {
    params: { ...commonParams },
    dataDD: listOccupationsDD,
    url: '/customer/occupation/v2/occupationsList?{query}',
    actions: [ 'get' ],
}


