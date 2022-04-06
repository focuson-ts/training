import { identityOptics } from "@focuson/lens";
import { Loading, MultiPageDetails, simpleMessagesPageConfig } from "@focuson/pages";
import {Context,  FState } from "./common";
import { HelloWorldMainPagePage } from './HelloWorldMainPage/HelloWorldMainPage.render';
import { HelloWorldMainPageOptionals } from "./HelloWorldMainPage/HelloWorldMainPage.optionals"; 

const simpleMessagesConfig = simpleMessagesPageConfig<FState, string, Context> (  Loading )
const identity = identityOptics<FState> ();
export const pages: MultiPageDetails<FState, Context> = {
    HelloWorldMainPage: {pageType: 'MainPage',  config: simpleMessagesConfig, lens: identity.focusQuery ( 'HelloWorldMainPage' ), pageFunction: HelloWorldMainPagePage(), initialValue: {}, pageMode: 'view',namedOptionals: HelloWorldMainPageOptionals }
  }