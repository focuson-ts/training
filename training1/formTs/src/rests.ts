import { RestDetails, OneRestDetails } from "@focuson/rest"
import { createSimpleMessage, DateFn, defaultDateFn, RestAction, insertBefore, SimpleMessage } from "@focuson/utils"
import { Lenses, NameAndLens} from "@focuson/lens"
import { FState , commonIds} from "./common";

import { HelloWorldMainPage_HelloWorldDomainDataRestDetails } from './HelloWorldMainPage/HelloWorldMainPage.rests';

export function restUrlMutator ( r: RestAction, url: string ): string { return insertBefore ( '?', r === 'list' ? '/list' : '', url )}

export const restDetails: RestDetails<FState, SimpleMessage> = {
   HelloWorldMainPage_HelloWorldDomainDataRestDetails: HelloWorldMainPage_HelloWorldDomainDataRestDetails(commonIds, defaultDateFn)

}
