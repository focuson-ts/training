import { TrainingDataD } from "../common";
import { BooleanDD, DateTimeDD, LabelAndCheckboxInputCD, LabelAndDropDownCD, LabelAndRadioCD, LayoutCd, ManyLineStringDD, NatNumDd, OneLineStringDD, StringDD, StringPrimitiveDD } from "@focuson/forms";
import { customerDetailsSample } from "./customerDetails.sample";

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
    layout: { component: LayoutCd, displayParams: { details: '[[4,4],[7]]' } },
    structure: {
        title: {
            dataDD: titleDD,
            sample: [customerDetailsSample.title]
        },
        name: {
            dataDD: StringDD,
            sample: [customerDetailsSample.name]
        },
        email: {
            dataDD: StringDD,
            displayParams: { label: 'Email Id' },
            sample: [customerDetailsSample.email]
        },
        phone: {
            dataDD: NatNumDd,
            displayParams: { label: 'Mobile No.' },
            //@ts-ignore
            sample: [customerDetailsSample.phone]
        },
        address: {
            dataDD: ManyLineStringDD,
            sample: [customerDetailsSample.address]
        },
        postcode: {
            dataDD: StringDD,
            sample: [customerDetailsSample.postcode]
        },
        goPaperless: {
            dataDD: BooleanDD,
            displayParams: { label: 'Yes, go paperless for all accounts' },
            // sample: [customerDetailsSample.goPaperless]
        },
        servicesActive: {
            dataDD: servicesActiveDD,
            sample: [customerDetailsSample.servicesActive]
        },
        lastSuccessfulLogin: {
            dataDD: DateTimeDD,
            sample: [customerDetailsSample.lastSuccessfulLogin]
        }
    }
}