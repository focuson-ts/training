import { TrainingDataD } from "../common";
import { StringDD } from "@focuson/forms";

export const addressDD: TrainingDataD = {
    name: "Address",
    description: "This is a simple description about the data. ",
    structure: {
        addressLine1: { dataDD: StringDD, sample: [ 'str. XXXX' ], displayParams: { required: false } },
        addressLine2: { dataDD: StringDD, sample: [ 'no. YYYY' ] },
        addressLine3: { dataDD: StringDD, sample: [ 'Cluj-Napoca' ] },
        addressLine4: { dataDD: StringDD, sample: [ 'Romania' ], displayParams: { required: false } },
        postCode: { dataDD: StringDD, sample: [ 'XYZI' ] }
    }
}

export const addressViewFullDomainDD: TrainingDataD = {
    name: "AddressViewFullDomain",
    description: "This is a simple description about the data. ",
    structure: {
        address: { dataDD: addressDD }
    }
}

