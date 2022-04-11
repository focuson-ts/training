import { TrainingDataD } from "../common";
import { BooleanDD, DateTimeDD, LabelAndDropDownCD, LabelAndRadioCD, LayoutCd, ManyLineStringDD, NatNumDd, OneLineStringDD, StringDD, StringPrimitiveDD } from "@focuson/forms";

export const titleDD: StringPrimitiveDD = {
    ...OneLineStringDD,
    name: "Title",
    description: "The component that displays title",
    display: LabelAndDropDownCD,
    enum: { mr: 'Mr', mrs: 'Mrs', ms: 'Ms' }
}

export const servicesActiveDD: StringPrimitiveDD = {
    ...OneLineStringDD,
    name: "ServicesActive",
    description: "The component that displays services active",
    display: LabelAndRadioCD,
    enum: { sms: 'SMS', netbanking: 'NetBanking', phoneBanking: "PhoneBanking" }
}

export const customerDetailsDD: TrainingDataD = {
    name: 'CustomerDetailsDomainData',
    description: 'Details about the customer',
    // layout: { component: LayoutCd, displayParams: { details: '[[4,4],[7]]' } },
    structure: {
        title: {
            dataDD: titleDD,
            sample: [ 'Mr.' ]
        },
        name: {
            dataDD: StringDD,
            sample: [ 'John Smith' ]
        },
        email: {
            dataDD: StringDD,
            displayParams: { label: 'Email Id' },
            sample: [ 'john.smith@gmail.com' ]
        },
        phone: {
            dataDD: NatNumDd,
            displayParams: { label: 'Mobile No.' },
            sample: [ 76587 ]
        },
        address: {
            dataDD: ManyLineStringDD,
            sample: [ '165 Terrington Place, Cleethorpes, UK' ]
        },
        postcode: {
            dataDD: StringDD,
            sample: [ 'DN359EH' ]
        },
        goPaperless: {
            dataDD: BooleanDD,
            displayParams: { label: 'Yes, go paperless for all accounts' },
            sample: [ true ]
        },
        servicesActive: {
            dataDD: servicesActiveDD,
            sample: [ 'sms' ]
        },
        lastSuccessfulLogin: {
            dataDD: DateTimeDD,
            sample: [ '30/03/2022 08:04:55' ]
        }
    }
}