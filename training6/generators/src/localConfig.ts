import { TrainingMainPage } from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { focusOnVersion } from "./focuson.config";

export const generatedPages: TrainingMainPage[] = [ ];
export const versionNumber = '0.0.1'
const applicationName = 'AppName'
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };