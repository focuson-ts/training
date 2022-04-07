import { TrainingDataD } from "../common";
import { StringDD } from "@focuson/forms";
import { addressViewSample } from "./addressView.sample";

export const addressDD: TrainingDataD = {
    name: "Address",
    description: "This is a simple description about the data. ",
    structure: {
        addressLine1: { dataDD: StringDD, sample: [ addressViewSample.addressLine1 ], displayParams: { required: false } },
        addressLine2: { dataDD: StringDD, sample: [ addressViewSample.addressLine2 ] },
        addressLine3: { dataDD: StringDD, sample: [ addressViewSample.addressLine3 ] },
        addressLine4: { dataDD: StringDD, sample: [ addressViewSample.addressLine4 ], displayParams: { required: true } },
        postCode: { dataDD: StringDD, sample: [ addressViewSample.postCode ] }
    }
}

export const addressViewFullDomainDD: TrainingDataD = {
    name: "AddressViewFullDomain",
    description: "This is a simple description about the data. ",
    structure: {
        address: { dataDD: addressDD }
    }
}

