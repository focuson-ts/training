import { TrainingMainPage } from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { focusOnVersion } from "./focuson.config";
import { addressViewMainPagePD } from "./generators/AddressView/addressView.pageD";

export const generatedPages: TrainingMainPage[] = [ addressViewMainPagePD];
export const versionNumber = '0.0.1'
const applicationName = 'Training2'
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };