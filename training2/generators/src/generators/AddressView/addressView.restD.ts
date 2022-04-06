/** This should fully define the api*/
import {RestD} from "@focuson/forms";
import {commonParams} from "../common";
import {addressViewFullDomainDD} from "./addressView.dataD";

export const addressViewRD: RestD<any> = {
    params: { ...commonParams },
    dataDD: addressViewFullDomainDD,
    url: '/address?{query}',
    actions: [ 'get', 'update' ],
}