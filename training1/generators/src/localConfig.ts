import { TrainingMainPage } from "./generators/common";
import { CombinedParams, params } from "@focuson/forms";
import { HelloWorldPage } from "./generators/HelloWorld/helloWorld.pageD";
import { loadFile } from "@focuson/files";

export const generatedPages: TrainingMainPage[] = [ HelloWorldPage ];
export const versionNumber = '0.0.1'
const applicationName = 'Training1'
export const focusOnVersion: string = JSON.parse ( loadFile ( 'package.json' ) ).dependencies[ "@focuson/forms" ]
export const javaAndTsParams: CombinedParams = { ...params, focusOnVersion, applicationName };
