import { SimpleDisplayComp } from "@focuson/forms";
import { loadFile } from "@focuson/files";
import { ExampleMainPage } from "./generators/common";
import { HelloWorldPage } from "./generators/HelloWorld/helloWorld.pageD";

export const generatedPages: ExampleMainPage[] = [
  HelloWorldPage ];
export const focusOnVersion: string = JSON.parse ( loadFile ( 'package.json' ) ).dependencies[ "@focuson/forms" ]

export let javaOutputRoot = '../formJava'
export const tsRoot = "../formTs"

const MyCombineCD: SimpleDisplayComp = { import: "@focuson/form_components", name: "MyCombined" }

export const devAppConfig = {
  fetch: "fetchWithDelay ( 1, fetchWithPrefix ( 'http://localhost:8080', loggingFetchFn ) )",
  combine: MyCombineCD,
  debug: { fetcherDebug: true, restDebug: false, selectedPageDebug: false, loadTreeDebug: false, showTracing: false, recordTrace: true }
}
