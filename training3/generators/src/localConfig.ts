import { TrainingMainPage } from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { focusOnVersion } from "./focuson.config";
import { CustomerDetailsPage } from "./generators/CustomerDetails/customerDetails.pageD";

export const generatedPages: TrainingMainPage[] = [ CustomerDetailsPage];
export const versionNumber = '0.0.1'
const applicationName = 'Training3'
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };