import { generatedPages } from "./focuson.config";
import { makeReport } from "@focuson/forms";

let lines: string[] = makeReport ( generatedPages );
lines.forEach ( p => {
  process.stdout.write ( p );
  process.stdout.write ( "\n" )
} )


