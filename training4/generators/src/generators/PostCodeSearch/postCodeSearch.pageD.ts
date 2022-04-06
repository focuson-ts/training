import { TrainingMainPage } from "../common";
import { nameAndAddressDataD, postCodeSearchDataD } from "./postCodeSearch.dataD";
import { IntegerDD } from "@focuson/forms";
import { addressRestD, postcodeRestD } from "./postCodeSearch.restD";
import { HideButtonsCD } from "@focuson/forms/dist/src/buttons/hideButtonsCD";
import { postCodeModalPagePD } from "./postCodeSearch.modalPageD";

export const postCodeMainPagePD: TrainingMainPage = {
  name: "PostCodeMainPage",
  pageType: "MainPage",
  display: { dataDD: nameAndAddressDataD, target: '~/main' },
  domain: {
    main: { dataDD: nameAndAddressDataD },
    postcode: { dataDD: postCodeSearchDataD },
    selectedPostcodeIndex: { dataDD: IntegerDD },
  },
  initialValue: { main: {}, postcode: { search: '', searchResults: [], addressResults: { addressLine1: '', addressLine2: '', addressLine3: '', addressLine4: '' } } },
  modals: [ { modal: postCodeModalPagePD } ],
  modes: [ 'edit' ],
  rest: {
    postcode: { rest: postcodeRestD, targetFromPath: '~/postcode/searchResults', fetcher: true },
    address: { rest: addressRestD, targetFromPath: '~/main' }
  },
  buttonOrder: [ 'save' ],//hide the search button
  layout: { component: HideButtonsCD, displayParams: { hide: [ 'search' ] }  },
  buttons: {
    search: {
      control: 'ModalButton', modal: postCodeModalPagePD, mode: 'edit',
      focusOn: '~/postcode',
      copy: { from:'~/main/postcode', to: '~/postcode/search' },
      copyOnClose: [
        { from: '~/postcode/addressResults/addressLine1', to: '~/main/addressLine1' },
        { from: '~/postcode/addressResults/addressLine2', to: '~/main/addressLine2' },
        { from: '~/postcode/addressResults/addressLine3', to: '~/main/addressLine3' },
        { from: '~/postcode/addressResults/addressLine4', to: '~/main/addressLine4' },
        { from: '~/postcode/search', to: '~/main/postcode' },
      ]
    },
    save: {
      control: 'RestButton', restName: 'address', action: 'create', validate: false
    }
  }
}