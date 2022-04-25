import { TrainingMainPage } from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { focusOnVersion } from "./focuson.config";
import { MainOccupationDetailsPageSummaryPD } from "./generators/MultipleOccupations/multipleOccupations.pageD";

export const generatedPages: TrainingMainPage[] = [MainOccupationDetailsPageSummaryPD ];
export const versionNumber = '0.0.1'
const applicationName = 'Training6'
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };