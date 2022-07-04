import { NatNumDd, TrainingMainPage } from "../common";
import { bounceDDDisplayDD, mandateSearchDD, oneMandateDetailsDD, scratchPadDD } from "./blank.dataD";
import { TrainingModalPage } from "@focuson/training4_generators/src/generators/common";
import { mandateSearchRD, scratchPadRD } from "./blank.restD";
import { HideButtonsCD } from "@focuson/forms";


export const mandateSearchModalPage: TrainingModalPage = {
  name: "MandateSearch",
  pageType: "ModalPopup",
  display: { dataDD: mandateSearchDD, target: '' },
  modes: [ 'edit' ],
  guards: {
    itemSelected: { condition: 'isDefined', path: '~/selectedMandateIndex' }
  },
  buttons: {
    cancel: { control: 'ModalCancelButton' },
    commit: { control: 'ModalCommitButton', enabledBy: 'itemSelected' }
  },
}
export const scratchpadModalPage: TrainingModalPage = {
  name: "Scratchpad",
  pageType: "ModalPopup",
  display: { dataDD: scratchPadDD, target: '' },
  modes: [ 'edit' ],
  buttons: {
    cancel: { control: 'ModalCancelButton' },
    commit: { control: 'ModalCommitButton' }
  },
}

export const BlankProjectPD: TrainingMainPage = {
  name: "BouncedDirectDebits",
  display: { target: '~/landingPage', dataDD: bounceDDDisplayDD },
  domain: {
    landingPage: { dataDD: bounceDDDisplayDD },
    mandateSearch: { dataDD: mandateSearchDD },
    scratchPad: { dataDD: scratchPadDD },
    selectedMandateIndex: { dataDD: NatNumDd },
    selectedMandateItem: { dataDD: oneMandateDetailsDD },
  },
  initialValue: 'empty',
  modals: [ { modal: mandateSearchModalPage }, { modal: scratchpadModalPage } ],
  modes: [ 'view' ],
  pageType: "MainPage",
  rest: {
    mandate: { rest: mandateSearchRD, targetFromPath: '~/mandateSearch/searchResults', fetcher: true },
    scratchPad: { rest: scratchPadRD, targetFromPath: '~/scratchPad', fetcher: true },
    // mandateDetails: { rest: mandateDetailsDDRD, targetFromPath: '~/landingPage/searchResults', fetcher: true },
  },
  layout: { component: HideButtonsCD, displayParams: { hide: [ 'search' ] } },
  buttons: {
    search: {
      control: 'ModalButton', modal: mandateSearchModalPage,
      focusOn: '~/mandateSearch',
      createEmpty: mandateSearchDD,
      copy: { from: '~/landingPage/mandateRef', to: '~/mandateSearch/mandateRef' },
      copyOnClose: [
        { from: '~/selectedMandateItem/mandateRef', to: '~/landingPage/mandateRef' },
        // { from: '~/selectedMandateItem', to: '~/landingPage/mandateRef' },
        { from: '~/selectedMandateItem/customerInfo1', to: '~/landingPage/mandateDetails/importantCustomerInfo1' },
        { from: '~/selectedMandateItem/customerInfo2', to: '~/landingPage/mandateDetails/importantCustomerInfo2' },
      ],
      mode: 'edit'
    },
    scratchpad: {
      control: 'ModalButton', modal: scratchpadModalPage,
      focusOn: '~/scratchPad',
      mode: 'edit',
      restOnCommit: { restName: 'scratchPad', action: 'update', result: 'nothing' }
    }
  }
}