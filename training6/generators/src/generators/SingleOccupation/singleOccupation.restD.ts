import {RestD} from "@focuson/forms";
import {commonParams} from "../common";
import {
    occupationAndIncomeFullDomainDD
} from "./singleOccupation.dataD";

export const occupationAndIncomeRD: RestD<any> = {
    params: { ...commonParams },
    dataDD: occupationAndIncomeFullDomainDD,
    url: '/customer/occupation/v2/occupationIncomeDetails?{query}',
    actions: [ 'get', 'update', 'create' ],
}
