import {  } from "./focuson.config";
import { formatWindowNode, isMainPage, makeGraph } from "@focuson/forms";
import { generatedPages } from "./localConfig";

const graphs = generatedPages.filter ( isMainPage ).flatMap ( p => [ ...formatWindowNode ( makeGraph ( p ), new Set () ), '' ] )

graphs.forEach ( s => {
  process.stdout.write ( s );
  process.stdout.write ( "\n" )
} )




