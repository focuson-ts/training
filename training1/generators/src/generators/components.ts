import { commonParams, DisplayCompD, intValidationParams } from "@focuson/forms";


export const SortCodeLayoutCD: DisplayCompD = {
  params: { label: { paramType: 'string', needed: 'yes' } },
  import: "../formComponents/sortCodeLayout",
  name: "SortCodeLayout"
}
export const InputNumberCD: DisplayCompD = {
  params: { ...commonParams, ...intValidationParams },
  import: "../formComponents/NumberInput",
  name: "NumberInput"
}
