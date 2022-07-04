import { TrainingDataD, TrainingRepeatingD } from "../common";
import { DateDD, LabelAndDropDownCD, LayoutCd, ManyLineStringDD, MoneyDD, OneLineStringDD, StringDD, StringPrimitiveDD, TableCD } from "@focuson/forms";


export const oneMandateDetailsDD: TrainingDataD = {
  name: 'OneMandate',
  description: 'A single Direct Debut mandate',
  structure: {
    mandateRef: { dataDD: StringDD, sample: [ '123123-23', '23423434-23', '3423-1' ] },
    name: { dataDD: StringDD, sample: [ 'fred', 'joe', 'bill' ] },
    dateOfBirth: { dataDD: DateDD, sample: [ '1980-10-01', '1982-9-01' ] },
    address: { dataDD: StringDD, sample: [ 'freds address', 'joes hole in the wall', 'bill lives here' ] },
    oaSortCode: { dataDD: StringDD, sample: [ '10-20-30', '20-30-40' ] },
    oaAccountNumber: { dataDD: StringDD, sample: [ '123234545', '453424' ] },
    ddSortCode: { dataDD: StringDD, sample: [ '12-21-30', '22-31-40' ] },
    ddAccountNumber: { dataDD: StringDD, sample: [ '4587345', '2346327864' ] },
    customerInfo1: { dataDD: StringDD, sample: [ 'something good', 'something bad' ] },
    customerInfo2: { dataDD: StringDD, sample: [ 'wicked', 'nice' ] },
  }
}

export const mandateDetailsTable: TrainingRepeatingD = {
  name: "MandateDetailsTable",
  dataDD: oneMandateDetailsDD,
  description: "",
  display: TableCD,
  displayParams: {
    order: [ 'mandateRef','name', 'dateOfBirth', 'address', 'oaSortCode', 'oaAccountNumber', 'ddSortCode', 'ddAccountNumber' ],
    copySelectedIndexTo: [ 'selectedMandateIndex' ],
    copySelectedItemTo: [ 'selectedMandateItem' ],
  },
  paged: false
}

export const mandateSearchDD: TrainingDataD = {
  name: 'MandateSearch',
  description: '',
  structure: {
    mandateRef: { dataDD: StringDD, displayParams: { required: false } },
    searchResults: { dataDD: mandateDetailsTable },
  }
}

export const mandateDetailsDD: TrainingDataD = {
  name: 'MandateDetails',
  description: 'The info we know about the mandate, displayed on the main page',
  structure: {
    notes: { dataDD: ManyLineStringDD },
    importantCustomerInfo1: { dataDD: StringDD },
    importantCustomerInfo2: { dataDD: StringDD },
  }
}

export const scratchPadDD: TrainingDataD = {
  name: 'Scratchpade',
  description: '',
  structure: {
    notes: { dataDD: ManyLineStringDD },
  }
}

export const NextActionDD: StringPrimitiveDD = {
  ...OneLineStringDD,
  name: 'YesNo',
  description: "yes/no enum",
  display: LabelAndDropDownCD,
  enum: {
    reason1: 'Reason1',
    reason2: 'Reason2',
  }
}

export const amendmentDD: TrainingDataD = {
  name: 'Amendment',
  description: '',
  structure: {
    reasonForBounceId: { dataDD: StringDD },
    reasonForBounce: { dataDD: StringDD },
    nextAction: { dataDD: NextActionDD }
  }
}

export const bounceDD: TrainingDataD = {
  name: 'Bounce',
  description: '',
  structure: {
    date: { dataDD: DateDD },
    amount: { dataDD: MoneyDD },
    nextAction: { dataDD: NextActionDD },
    amendment: { dataDD: amendmentDD },
    representDate: { dataDD: DateDD },
  }
}
export const bounceDDDisplayDD: TrainingDataD = {
  name: 'BounceDirectDebit',
  description: 'This is the landing page for the BoundDD with all the info for that on it',
  structure: {
    mandateRef: { dataDD: StringDD, sample: [ '0123123' ] , displayParams: {buttons:['search']}},
    mandateDetails: { dataDD: mandateDetailsDD },
    ammendment: { dataDD: amendmentDD },
    bounce: { dataDD: bounceDD }
  }
}