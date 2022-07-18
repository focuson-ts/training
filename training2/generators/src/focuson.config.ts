import { CombinedParams, directorySpec, params, SimpleDisplayComp } from "@focuson/forms";
import { DirectorySpec, loadFile } from "@focuson/files";
import { GenerateLogLevel } from "@focuson/utils";
import process from "process";
import { versionNumber } from "./localConfig";
export const logLevel: GenerateLogLevel = 'detailed';
export let javaOutputRoot = '../formJava'
export const tsRoot = "../formTs"

const MyCombineCD: SimpleDisplayComp = { import: "@focuson/form_components", name: "MyCombined" }


export const directorySpecPointingAtNodeModules: DirectorySpec = {
  ...directorySpec,
  backup: (process.env[ 'yarn' ] ? '../../' : '') + 'node_modules/@focuson/forms'
}

const details = JSON.parse ( loadFile ( 'project.details.json' ) ).details;
export const javaPort = details.javaPort
export const tsPort: number = details.tsPort
if ( !javaPort || !tsPort ) {
  console.log ( "exiting. please define javaPort and tsPort in the project.details file, in the details section" );
  process.exit ( 2 )
}
console.log ( "JavaPort is", javaPort, "tsPort is", tsPort )

export const devAppConfig = {
  javaPort,
  tsPort,
  versionNumber,
  fetch: `fetchWithDelay ( 1, fetchWithPrefix ( 'http://localhost:${javaPort}', loggingFetchFn ) )`,
  combine: MyCombineCD,
  debug: { fetcherDebug: false, restDebug: false, selectedPageDebug: false, loadTreeDebug: false, showTracing: false, recordTrace: true , guardDebug: false, validityDebug: true}
}