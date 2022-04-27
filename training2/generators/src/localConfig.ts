import { TrainingMainPage } from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { addressViewMainPagePD } from "./generators/AddressView/addressView.pageD";
import { loadFile } from "@focuson/files";

export const generatedPages: TrainingMainPage[] = [ addressViewMainPagePD];
export const versionNumber = '0.0.1'
const applicationName = 'Training2'
export const focusOnVersion: string = JSON.parse ( loadFile ( 'package.json' ) ).dependencies[ "@focuson/forms" ]

export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };