import { TrainingMainPage } from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { focusOnVersion } from "./focuson.config";
import { postCodeMainPagePD } from "./generators/PostCodeSearch/postCodeSearch.pageD";

export const generatedPages: TrainingMainPage[] = [ postCodeMainPagePD];

const applicationName = 'Training4'
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };