import { DataD, OneLineStringDD, RepeatingDataD, TableCD } from "@focuson/forms";
import { AllGuards } from "@focuson/forms/dist/src/buttons/guardButton";

export const postCodeDataLineD: DataD<AllGuards> = {
  name: "PostCodeDataLine",
  description: "",
  structure: {
    addressLine1: { dataDD: OneLineStringDD, sample: [ 'addressLine11', 'addressLine12', 'addressLine13' ] },
    addressLine2: { dataDD: OneLineStringDD, sample: [ 'addressLine21', 'addressLine22', 'addressLine23' ] },
    addressLine3: { dataDD: OneLineStringDD, sample: [ 'addressLine31', 'addressLine32', 'addressLine33' ] },
    addressLine4: { dataDD: OneLineStringDD, sample: [ 'addressLine41', 'addressLine42', 'addressLine43' ] }
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
    search: { dataDD: OneLineStringDD, sample: [ 'search1', 'search2', 'search3' ] },
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