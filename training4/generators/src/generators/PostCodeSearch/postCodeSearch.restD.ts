import { AllGuards, RestD, RestParams, StringParam } from "@focuson/forms";
import { nameAndAddressDataD, postCodeSearchResponse } from "./postCodeSearch.dataD";
import { commonParams, dbNameParams, onlySchema } from "../common";


export const postcodeParams: RestParams = {
  postcode: { ...StringParam, lens: '~/postcode/search', testValue: 'LW12 4RG' }
}

export const postcodeRestD: RestD<AllGuards> = {
  params: postcodeParams,
  dataDD: postCodeSearchResponse,
  url: '/api/postCode?{query}',
  actions: [ 'get' ],
  mutations: [
    { restAction: 'get', mutateBy: { type: 'storedProc', schema: onlySchema, name: 'auditPostcodeSearch', params: [ 'postcode' ] } }
  ]

}

export const addressRestD: RestD<AllGuards> = {
  params: { ...commonParams, ...dbNameParams },
  dataDD: nameAndAddressDataD,
  url: '/api/address?{query}',
  actions: [ 'create' ],
  mutations: [
    {
      restAction: 'create', mutateBy: [
        { type: 'storedProc', schema: onlySchema, name: 'findNextId', params: [ { type: 'output', name: 'id', javaType: 'Integer', sqlType: 'INTEGER' } ] },
        { type: 'storedProc', schema: onlySchema, name: 'auditAddressCreate', params: [ 'id', 'body' ] },
      ]
    }
  ]
}
