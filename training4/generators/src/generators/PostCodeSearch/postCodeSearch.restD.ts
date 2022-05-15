import { RestD, RestParams, StringParam } from "@focuson/forms";
import { AllGuards } from "@focuson/forms/dist/src/buttons/guardButton";
import { nameAndAddressDataD, postCodeSearchResponse } from "./postCodeSearch.dataD";
import { onlySchema } from "@focuson/forms/dist/src/example/database/tableNames";
import { commonParams } from "../common";
import { dbNameParams } from "../../../../../training0/generators/src/generators/tables";

export const postcodeParams: RestParams = {
  postcode: { ...StringParam, lens: '~/postcode/search', testValue: 'LW12 4RG' }
}

export const postcodeRestD: RestD<AllGuards> = {
  params: postcodeParams,
  dataDD: postCodeSearchResponse,
  url: '/api/postCode?{query}',
  actions: [ 'get' ],
  mutations: [
    { restAction: 'get', mutateBy: { mutation: 'storedProc', schema: onlySchema, name: 'auditPostcodeSearch', params: [ 'postcode' ] } }
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
        { mutation: 'storedProc', schema: onlySchema, name: 'findNextId', params: [ { type: 'output', name: 'id', javaType: 'Integer', sqlType: 'INTEGER' } ] },
        { mutation: 'storedProc', schema: onlySchema, name: 'auditAddressCreate', params: [ 'id', 'body' ] },
      ]
    }
  ]
}
