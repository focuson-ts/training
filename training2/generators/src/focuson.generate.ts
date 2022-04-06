import { AllGuardCreator, generate, makeButtons } from "@focuson/forms";
import *  as fse from "fs-extra";
import { devAppConfig, directorySpecPointingAtNodeModules,  javaOutputRoot, logLevel, tsRoot } from "./focuson.config";
import { generatedPages, javaAndTsParams } from "./localConfig";


generate ( logLevel, directorySpecPointingAtNodeModules, devAppConfig, javaAndTsParams, javaOutputRoot, tsRoot, AllGuardCreator, makeButtons () ) ( generatedPages )

fse.copySync ( 'src/formComponents', tsRoot + "/src/formComponents" )
