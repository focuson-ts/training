import { AllGuardCreator, generate, makeButtons } from "@focuson/forms";
import *  as fse from "fs-extra";
import { devAppConfig, focusOnVersion, generatedPages, javaOutputRoot, tsRoot } from "./focuson.config";


generate ( devAppConfig, javaOutputRoot, tsRoot, focusOnVersion, AllGuardCreator, makeButtons () ) ( generatedPages )
// fse.copySync ( 'src/components', tsRoot + "/src/components" )
fse.copySync ( 'src/formComponents', tsRoot + "/src/formComponents" )
