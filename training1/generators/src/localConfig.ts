import { TrainingMainPage } from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { focusOnVersion } from "./focuson.config";
import { HelloWorldPage } from "./generators/HelloWorld/helloWorld.pageD";

export const generatedPages: TrainingMainPage[] = [ HelloWorldPage ];
export const versionNumber = '0.0.1'
const applicationName = 'Training1'
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };