import { CombinedParams, directorySpec, params, SimpleDisplayComp } from "@focuson/forms";
import { DirectorySpec, loadFile } from "@focuson/files";
import { GenerateLogLevel } from "@focuson/utils";
import process from "process";

export const logLevel: GenerateLogLevel = 'detailed';
export let javaOutputRoot = '../formJava'
export const tsRoot = "../formTs"

const MyCombineCD: SimpleDisplayComp = { import: "@focuson/form_components", name: "MyCombined" }

export const devAppConfig = {
  fetch: "fetchWithDelay ( 1, fetchWithPrefix ( 'http://localhost:8080', loggingFetchFn ) )",
  combine: MyCombineCD,
  debug: { fetcherDebug: false, restDebug: false, selectedPageDebug: false, loadTreeDebug: false, showTracing: false, recordTrace: true }
}
console.log('yarn', process.env.YARN)
export const directorySpecPointingAtNodeModules: DirectorySpec = {
  ...directorySpec,
  backup: (process.env[ 'yarn' ] ? '../../' : '') + 'node_modules/@focuson/forms'
}

export const focusOnVersion: string = JSON.parse ( loadFile ( 'package.json' ) ).dependencies[ "@focuson/forms" ]
