import { TrainingMainPage } from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { focusOnVersion } from "./focuson.config";
import { CustomerDetailsPage } from "./generators/CustomerDetails/customerDetails.pageD";

export const generatedPages: TrainingMainPage[] = [ CustomerDetailsPage];

const applicationName = 'Training3'
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };