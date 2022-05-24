import { AllButtonsInPage, AllGuards, CommonLensRestParam, DataD, IntParam, LabelAndDropDownCD, LabelAndNumberInputCD, MainPageD, ModalPageD, numberPrimDD, NumberPrimitiveDD, RepeatingDataD, RestD, RestParams, Schema, StringParam, stringPrimDD, StringPrimitiveDD } from "@focuson/forms";
import { NameAnd } from "@focuson/utils";


export type TrainingButtons = AllButtonsInPage<AllGuards>

export type TrainingMainPage = MainPageD<TrainingButtons, AllGuards>
export type TrainingModalPage = ModalPageD<TrainingButtons, AllGuards>
export type TrainingDataD = DataD<AllGuards>
export type TrainingRepeatingD = RepeatingDataD<AllGuards>
export type TrainingRestD = RestD<AllGuards>

export const NatNumDd: NumberPrimitiveDD = {
  ...numberPrimDD,
  name: 'NaturalNumber',
  description: "A positive integer",
  display: LabelAndNumberInputCD,
  displayParams: { min: 0 },
  sample: [ 123, 456 ]
}

export const PaymentTypeDd: StringPrimitiveDD = {
  ...stringPrimDD,
  name: 'PaymentType',
  description: "A payment type",
  display: LabelAndDropDownCD,
  enum: { dd: 'DD', ddResubmit: "DD Resubmit" }
}

export const commonParams: RestParams = {
  vbAccountSeq: { ...IntParam, commonLens: 'vbAccountSeq', testValue: 11111111 },
  vbAccountType: { ...IntParam, commonLens: 'vbAccountType', testValue: 2 },
  brandRef: { ...IntParam, commonLens: 'brandRef', testValue: 3 },
  accountSeq: { ...IntParam, commonLens: 'accountSeq', testValue: 4444444 },
  applicationRef: { ...IntParam, commonLens: 'applicationRef', testValue: 5 },
  clientRef: { ...IntParam, commonLens: 'clientRef', testValue: 6666666 },
  employmentSeq: { ...IntParam, commonLens: 'employmentSeq', testValue: 777777 }
}
export const dbNameParams: NameAnd<CommonLensRestParam<any>> = {
  dbName: { ...StringParam, commonLens: 'dbName', testValue: 'mock' }
}

export const onlySchema: Schema = {
  name: "TheSchema"
}