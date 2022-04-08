import {RestD} from "@focuson/forms";
import {commonParams} from "../common";
import {
    occupationAndIncomeFullDomainDD
} from "./multipleOccupations.dataD";

export const occupationAndIncomeRD: RestD<any> = {
    params: { ...commonParams },
    dataDD: occupationAndIncomeFullDomainDD,
    url: '/customer/occupation/v2/occupationIncomeDetails?{query}',
    actions: [ 'get', 'update', 'create' ],
}
