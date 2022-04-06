import { customerDetailsDD } from "./customerDetails.dataD";
import { commonParams, TrainingRestD } from "../common";

export const customerDetailsRD:TrainingRestD = {
    params: { ...commonParams },
    dataDD: customerDetailsDD,
    url: '/customerDetails?{query}',
    actions: [ 'get' ],
}