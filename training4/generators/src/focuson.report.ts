import { makeReport } from "@focuson/forms";
import { generatedPages } from "./localConfig";

let lines: string[] = makeReport ( generatedPages );
lines.forEach ( p => {
  process.stdout.write ( p );
  process.stdout.write ( "\n" )
} )


