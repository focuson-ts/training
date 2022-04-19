import { TrainingDataD } from "../common";
import { LayoutCd, StringDD } from "@focuson/forms";
import { addT } from "../tables";

export const addressDD: TrainingDataD = {
  name: "Address",
  description: "The address of a customer",
  table: addT,
  // layout: {component: LayoutCd, displayParams: {details: "[[2,2,1]]"}},
  // layout: {component: LayoutCd, displayParams: {details: "[[4,1]]"}}, //default labelWidth:35%, valueWidth: remaining%
  // layout: {component: LayoutCd, displayParams: {details: "[[4,1]]", defaultProps: `{"labelWidth": 20}`}}, //override default labelWidth:20%, valueWidth: remaining%
  structure: {
    addressLine1: { dataDD: StringDD, db: 'aline1', sample: [ 'str. XXXX' ], displayParams: { required: false } },
    addressLine2: { dataDD: StringDD, db: 'aline2', sample: [ 'no. YYYY' ], displayParams: { required: false } },
    addressLine3: { dataDD: StringDD, db: 'aline3', sample: [ 'Cluj-Napoca' ] },
    addressLine4: { dataDD: StringDD, db: 'aline4', sample: [ 'Romania' ], displayParams: { required: false } },
    postCode: { dataDD: StringDD, db: 'postcode', sample: [ 'XYZI' ] }
  }
}


