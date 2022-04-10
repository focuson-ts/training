import { TrainingDataD } from "../common";
import { LayoutCd, StringDD } from "@focuson/forms";
import { addT } from "../tables";

export const addressDD: TrainingDataD = {
  name: "Address",
  description: "The address of a customer",
  table: addT,
  layout: {component: LayoutCd, displayParams: {details: "[[2,2,1]]"}},
  structure: {
    addressLine1: { dataDD: StringDD, db: 'aline1', sample: [ 'str. XXXX' ], displayParams: { required: false } },
    addressLine2: { dataDD: StringDD, db: 'aline1', sample: [ 'no. YYYY' ] },
    addressLine3: { dataDD: StringDD, db: 'aline1', sample: [ 'Cluj-Napoca' ] },
    addressLine4: { dataDD: StringDD, db: 'aline1', sample: [ 'Romania' ], displayParams: { required: false } },
    postCode: { dataDD: StringDD, db: 'aline1', sample: [ 'XYZI' ] }
  }
}


