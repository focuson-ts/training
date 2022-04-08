import {TrainingMainPage} from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { focusOnVersion } from "./focuson.config";
import {MainOccupationDetailsPageSummaryPD} from "./generators/MultipleOccupations/multipleOccupations.pageD";

export const generatedPages: TrainingMainPage[] = [
    MainOccupationDetailsPageSummaryPD ];
const applicationName = 'Training6'
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };