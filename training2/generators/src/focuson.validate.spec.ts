import { validate } from "@focuson/forms/dist/src/makeFiles/validateModel";
import { generatedPages } from "./localConfig";

describe ( "validate the pages", () => {
  it ( "should check the pages and names", () => {
    validate ( generatedPages )
  } )

} )