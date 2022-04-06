import {TrainingMainPage} from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { focusOnVersion } from "./focuson.config";
import {MainOccupationDetailsPageSummaryPD} from "./generators/SingleOccupation/singleOccupation.pageD";

export const generatedPages: TrainingMainPage[] = [
    MainOccupationDetailsPageSummaryPD ];
const applicationName = 'Training5'
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };