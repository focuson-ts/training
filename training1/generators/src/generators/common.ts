import {
    AllButtonsInPage,
    DataD, IntParam,
    LabelAndDropDownCD,
    LabelAndNumberInputCD,
    MainPageD,
    ModalPageD,
    numberPrimDD,
    NumberPrimitiveDD,
    RepeatingDataD,
    RestD,
    RestParams,
    stringPrimDD,
    StringPrimitiveDD
} from "@focuson/forms";
import { AllGuards } from "@focuson/forms/dist/src/buttons/guardButton";


export type ExampleButtons = AllButtonsInPage<AllGuards>

export type ExampleMainPage = MainPageD<ExampleButtons, AllGuards>
export type ExampleModalPage = ModalPageD<ExampleButtons, AllGuards>
export type ExampleDataD = DataD<AllGuards>
export type ExampleRepeatingDataD = RepeatingDataD<AllGuards>
export type ExampleRestD = RestD<AllGuards>
export const NatNumDd: NumberPrimitiveDD = {
    ...numberPrimDD,
    name: 'NaturalNumber',
    description: "A positive integer",
    display: LabelAndNumberInputCD,
    displayParams: { min: 0 } ,
    sample: [123, 456]
}

export const PaymentTypeDd: StringPrimitiveDD = {
    ...stringPrimDD,
    name: 'PaymentType',
    description: "A payment type",
    display: LabelAndDropDownCD,
    enum: {dd: 'DD', ddResubmit: "DD Resubmit"}
}

export const commonParams: RestParams = {
    vbAccountSeq: { ...IntParam, commonLens: 'vbAccountSeq', testValue: 'vbAccountSeq'},
    vbAccountType: { ...IntParam, commonLens: 'vbAccountType', testValue: 'vbAccountType'},
    brandRef: { ...IntParam, commonLens: 'brandRef', testValue: 'brandRef'},
    accountSeq: { ...IntParam, commonLens: 'accountSeq', testValue: 'accountSeq' },
    applicationRef: { ...IntParam, commonLens: 'applicationRef', testValue: 'applicationRef' },
    clientRef: { ...IntParam, commonLens: 'clientRef', testValue: 'clientRef' },
    employmentSeq: {...IntParam,  commonLens: 'employmentSeq', testValue: 'employmentSeq' }
}
