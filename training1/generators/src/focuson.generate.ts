import { AllGuardCreator, directorySpec, generate, makeButtons, params } from "@focuson/forms";
import { DirectorySpec } from "@focuson/files";
import *  as fse from "fs-extra";
import { devAppConfig, focusOnVersion, generatedPages, javaOutputRoot, tsRoot } from "./focuson.config";
import { GenerateLogLevel } from "@focuson/utils";

const logLevel: GenerateLogLevel = 'detailed';


export const directorySpecPointingAtNodeModules: DirectorySpec = {
  ...directorySpec,
  backup: '../../node_modules/@focuson/forms'
}
generate ( logLevel, directorySpecPointingAtNodeModules, devAppConfig, { ...params, focusOnVersion }, javaOutputRoot, tsRoot, AllGuardCreator, makeButtons () ) ( generatedPages )
// fse.copySync ( 'src/components', tsRoot + "/src/components" )
fse.copySync ( 'src/formComponents', tsRoot + "/src/formComponents" )
