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
  vbAccountSeq: { ...IntParam, commonLens: 'vbAccountSeq', testValue: 123 },
  vbAccountType: { ...IntParam, commonLens: 'vbAccountType', testValue: 234 },
  brandRef: { ...IntParam, commonLens: 'brandRef', testValue: 7 },
  accountSeq: { ...IntParam, commonLens: 'accountSeq', testValue: 555 },
  applicationRef: { ...IntParam, commonLens: 'applicationRef', testValue: 666 },
  clientRef: { ...IntParam, commonLens: 'clientRef', testValue: 32123 },
  employmentSeq: { ...IntParam, commonLens: 'employmentSeq', testValue: 543444 }
}
