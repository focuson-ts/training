import * as common from './common';
import { HelloWorldDomainDataFetcher } from './HelloWorldMainPage/HelloWorldMainPage.fetchers';
import { FetcherTree,  } from "@focuson/fetcher";
import { HasTagHolder } from "@focuson/template";
import { HasPageSelection } from "@focuson/pages";
import { HasSimpleMessages, SimpleMessage } from '@focuson/utils';
import { pageAndTagFetcher } from "@focuson/focuson";
import { commonIds, identityL } from './common';
import { Optional, Lenses, NameAndLens} from '@focuson/lens';
export const fetchers: FetcherTree<common.FState> = {
fetchers: [
    HelloWorldDomainDataFetcher( identityL.focusQuery ( 'HelloWorldMainPage' ), commonIds )
],
children: []}