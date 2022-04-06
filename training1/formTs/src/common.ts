import { HasPageSelection, PageMode ,PageSelectionContext} from '@focuson/pages'
import { defaultDateFn, HasSimpleMessages, SimpleMessage, NameAnd } from '@focuson/utils';
import {  OnTagFetchErrorFn } from '@focuson/fetcher';
import { identityOptics,NameAndLens } from '@focuson/lens';
import { HasTagHolder } from '@focuson/template';
 import { HasRestCommands } from '@focuson/rest'
import { commonTagFetchProps, defaultPageSelectionAndRestCommandsContext, FocusOnContext, HasFocusOnDebug } from '@focuson/focuson';
import { LensProps } from '@focuson/state';
import { pages } from "./pages";
import { MyCombined } from "@focuson/form_components";
import { HasHelloWorldMainPagePageDomain } from './HelloWorldMainPage/HelloWorldMainPage.domains';

export interface FState extends HasSimpleMessages,HasPageSelection,HasCommonIds,HasTagHolder,HasRestCommands,HasFocusOnDebug,
  HasHelloWorldMainPagePageDomain
{}
export interface HasCommonIds {CommonIds: CommonIds}
export type CommonIds = {
  accountSeq?:string;
  applicationRef?:string;
  brandRef?:string;
  clientRef?:string;
  employmentSeq?:string;
  vbAccountSeq?:string;
  vbAccountType?:string;
}
export const identityL = identityOptics<FState> ();
export const commonIdsL = identityL.focusQuery('CommonIds');
export const commonIds: NameAndLens<FState> = {
   accountSeq: commonIdsL.focusQuery('accountSeq'),
   applicationRef: commonIdsL.focusQuery('applicationRef'),
   brandRef: commonIdsL.focusQuery('brandRef'),
   clientRef: commonIdsL.focusQuery('clientRef'),
   employmentSeq: commonIdsL.focusQuery('employmentSeq'),
   vbAccountSeq: commonIdsL.focusQuery('vbAccountSeq'),
   vbAccountType: commonIdsL.focusQuery('vbAccountType')
}
export interface FocusedProps<S,D, Context> extends LensProps<S,D, Context>{
  mode: PageMode;
  id: string;
  buttons: NameAnd<JSX.Element>
}
export function commonFetch<S extends HasSimpleMessages & HasTagHolder & HasPageSelection, T> ( onError?: OnTagFetchErrorFn<S, any, T, SimpleMessage> ) {
  return commonTagFetchProps<S, T> (
    ( s, date ) => [], //later do the messaging
    defaultDateFn ) ( onError ) //updateTagsAndMessagesOnError ( defaultErrorMessage )
}
export type Context = FocusOnContext<FState>
export const context: Context = {
   ...defaultPageSelectionAndRestCommandsContext<FState> ( pages, commonIds),
   combine: MyCombined
}
export const emptyState: FState = {
  CommonIds: {"accountSeq":"accountSeq","applicationRef":"applicationRef","brandRef":"brandRef","clientRef":"clientRef","employmentSeq":"employmentSeq","vbAccountSeq":"vbAccountSeq","vbAccountType":"vbAccountType"},
  tags: {},
  messages: [],
  pageSelection: [{ pageName: 'HelloWorldMainPage', firstTime: true, pageMode: 'view' }],
  HelloWorldMainPage:{},
  restCommands: [],
  debug: {"fetcherDebug":true,"restDebug":false,"selectedPageDebug":false,"loadTreeDebug":false,"showTracing":false,"recordTrace":true}
  }