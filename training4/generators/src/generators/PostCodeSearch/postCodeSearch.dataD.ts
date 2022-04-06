import { DataD, OneLineStringDD, RepeatingDataD, TableCD } from "@focuson/forms";
import { AllGuards } from "@focuson/forms/dist/src/buttons/guardButton";
import {
  postCodeSearchSampleOne,
  postCodeSearchSampleThree,
  postCodeSearchSampleTwo
} from "./postCodeSearch.sample";

export const postCodeDataLineD: DataD<AllGuards> = {
  name: "PostCodeDataLine",
  description: "",
  structure: {
    addressLine1: { dataDD: OneLineStringDD, sample: [ postCodeSearchSampleOne.addressLine1, postCodeSearchSampleTwo.addressLine1, postCodeSearchSampleThree.addressLine1 ] },
    addressLine2: { dataDD: OneLineStringDD, sample: [ postCodeSearchSampleOne.addressLine2, postCodeSearchSampleTwo.addressLine2, postCodeSearchSampleThree.addressLine2 ] },
    addressLine3: { dataDD: OneLineStringDD, sample: [ postCodeSearchSampleOne.addressLine3, postCodeSearchSampleTwo.addressLine3, postCodeSearchSampleThree.addressLine3 ] },
    addressLine4: { dataDD: OneLineStringDD, sample: [ postCodeSearchSampleOne.addressLine4, postCodeSearchSampleTwo.addressLine4, postCodeSearchSampleThree.addressLine4 ] }
  }
}

export const postCodeSearchResponse: RepeatingDataD<AllGuards> = {
  name: "PostCodeData",
  description: "The array of all the data",
  dataDD: postCodeDataLineD,
  paged: false,
  display: TableCD,
  displayParams: {
    order: [ 'addressLine1', 'addressLine2', 'addressLine3', 'addressLine4' ] ,
    copySelectedItemTo: [ 'postcode', 'addressResults' ]
  }
}

export const postCodeSearchDataD: DataD<AllGuards> = {
  name: "PostCodeSearch",
  description: "The post code search example: type postcode get results",
  structure: {
    search: { dataDD: OneLineStringDD, sample: [ postCodeSearchSampleOne.search, postCodeSearchSampleTwo.search, postCodeSearchSampleThree.search ] },
    searchResults: { dataDD: postCodeSearchResponse },
    addressResults: { dataDD: postCodeDataLineD }
  }
}

export const nameAndAddressDataD: DataD<AllGuards> = {
  name: "PostCodeMainPage",
  description: "An address that the Postcode data needs to be formComponents to",
  structure: {
    name: { dataDD: OneLineStringDD },
    ...postCodeDataLineD.structure,
    postcode: { dataDD: OneLineStringDD, displayParams: { buttons: ['search'] } }
  }
}