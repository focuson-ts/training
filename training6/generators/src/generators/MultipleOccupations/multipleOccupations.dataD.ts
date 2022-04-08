import {commonParams, TrainingDataD, TrainingRepeatingD} from "../common";
import { DateDD,
    DisplayCompD, IntegerDD, LabelAndDropDownCD, LayoutCd, OneLineStringDD, StringDD, StringPrimitiveDD } from "@focuson/forms";
import { CustomerStatus, EmploymentType, HowOften, YesNo } from "../../formComponents/enums";

export const yesNoDD: StringPrimitiveDD = {
    ...OneLineStringDD,
    name: 'YesNo',
    description: "yes/no enum",
    display: LabelAndDropDownCD,
    enum: YesNo
}
export const customerStatusDD: StringPrimitiveDD = {
    ...OneLineStringDD,
    name: 'CustomerStatus',
    description: "Customer status enum",
    display: LabelAndDropDownCD,
    enum: CustomerStatus,
}
export const employmentTypeDD: StringPrimitiveDD = {
    ...OneLineStringDD,
    name: 'EmploymentType',
    description: "Employment contract type",
    display: LabelAndDropDownCD,
    enum: EmploymentType
}

export const SelectedItemCD: DisplayCompD = {
    import: '../formComponents/table',
    name: "SelectedItem",
    params: {
        ...commonParams,
        index: { paramType: 'pageStateValue', needed: 'yes' },
        display: { paramType: 'object', needed: 'yes' },
        buttons: { paramType: 'object', needed: 'defaultToButtons' }
    }
}

/* ---------------- MULTIPLE OCCUPATION INCOME DETAILS DD START ---------------- */
export const oneOccupationIncomeDetailsDD: TrainingDataD = {
    name: "MultipleOccupationsIncomeDetailsDD",
    description: "This is a summary about occupation income details data of a multiple occupations",
    layout: { component: LayoutCd, displayParams: { details:  '[[30]]' , title:  ['Current employment details - '] } },
    guards: {
        areYou: { condition: 'in', path: 'areYou', values: customerStatusDD.enum },
        ownShareOfTheCompany: { condition: 'in', path: 'ownShareOfTheCompany', values: yesNoDD.enum },
        owningSharesPct: { condition: 'in', path: 'owningSharesPct', values: yesNoDD.enum },
        employmentType: { condition: 'in', path: 'employmentType', values: employmentTypeDD.enum },
    },
    structure: {
        areYou: { dataDD: customerStatusDD, displayParams: { label: "Are {~/mainOrJoint|you|they}... " } },
        occupation: { dataDD: StringDD, displayParams: { label: "What is {~/mainOrJoint|your|their} occupation? " }, guard: { areYou: [ 'E', 'S' ] }, sample: [ 'Hair Dresser', 'Engineer' ]  },
        customerDescription: { dataDD: StringDD, displayParams: { label: "Customers description: " }, guard: { areYou: [ 'E', 'S' ] }, sample: [ 'XXXXXXXXX', 'YYYYYYYYY' ] },
        ownShareOfTheCompany: { dataDD: yesNoDD, displayParams: { label: "Do {~/mainOrJoint|you|they} own a share of the company? " }, guard: { areYou: [ 'E' ] } },
        owningSharesPct: { dataDD: yesNoDD, displayParams: { label: "Is this 20% or more of it? " }, guard: { areYou: [ 'E' ], ownShareOfTheCompany: [ 'Y' ] } },
        workFor: { dataDD: StringDD, displayParams: { label: "Who do {~/mainOrJoint|you|they} work for? " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] }, sample: [ 'Hair Saloon', 'S.C. Bosch S.R.L.' ] },
        employmentType: { dataDD: employmentTypeDD, displayParams: { label: "Is this employment... " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] } },
        empStartDate: { dataDD: DateDD, displayParams: { label: "When did this employment start? (mm/yyyy) " }, guard: { areYou: [ 'E' ], employmentType: [ '1' ] }, sample: [ '10/2002', '10/2005' ] },
        empEndDate: { dataDD: DateDD, displayParams: { label: "When will it finish? (mm/yyyy) " }, guard: { areYou: [ 'E' ], employmentType: [ '2', '3' ] }, sample: [ '10/2010', '10/2020' ] },
        annualSalaryBeforeDeduction: { dataDD: IntegerDD, displayParams: { label: "What is {~/mainOrJoint|your|their} annual salary? (before deductions) " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] }, sample: [ 20315, 20330 ] },
        annualIncomeExcludingRent: { dataDD: IntegerDD, displayParams: { label: "Do {~/mainOrJoint|you|they} have any other guaranteed annual income? (excluding rent) " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] }, sample: [ 13255, 13252 ] },
        regularCommissionBonus: { dataDD: IntegerDD, displayParams: { label: "Do {~/mainOrJoint|you|they} have any regular commission, bonus or overtime? " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] }, sample: [ 500, 1000 ] },
        whatTypeOfBusiness: { dataDD: StringDD, displayParams: { label: "What type of business is it? " }, guard: { areYou: [ 'E', 'S' ], owningSharesPct: [ 'Y' ] }, sample: [ 'Saloon', 'Electrical Technical Support' ] },
        whatNameBusiness: { dataDD: StringDD, displayParams: { label: "What is its name: " }, guard: { areYou: [ 'E', 'S' ], owningSharesPct: [ 'Y' ] }, sample: [ 'XXXXXXXXX', 'YYYYYYYYY' ] },
        establishedYear: { dataDD: StringDD, displayParams: { label: "When was it established? (MM/YYYY) " }, guard: { areYou: [ 'E', 'S' ], owningSharesPct: [ 'Y' ] }, sample: [ '10/2011', '11/2010' ] },
        annualDrawing3Yrs: { dataDD: IntegerDD, displayParams: { label: "What are {~/mainOrJoint|your|their} average annual drawings over the past 3 years? " }, guard: { areYou: [ 'E', 'S' ], owningSharesPct: [ 'Y' ] }, sample: [ 100000, 200000 ] },
        otherSourceOfIncome: { dataDD: yesNoDD, displayParams: { label: "Do {~/mainOrJoint|you|they} have another sources of income (e.g. rental income) ? " }, },
        createdBy: { dataDD: StringDD, displayParams: { label: "Entry created by: " }, sample: [ 'Seras Alin', 'Seras Alin' ] },
        empEmploymentSeq: { dataDD: IntegerDD, hidden: true, sample: [ 999998, 999999 ] },
        accountantAppRoleSeq: { dataDD: IntegerDD, hidden: true, sample: [ 1464885, 14648852 ] },
    }
}
export const multipleOccupationsIncomeDetailsDD: TrainingRepeatingD = {
    paged: false,
    display: SelectedItemCD,
    name: "CustomerOccupationIncomeDetails",
    description: "This is a summary customer occupations data",
    displayParams: { index: [ 'selectedItem' ] , display: oneOccupationIncomeDetailsDD.name  },
    dataDD: oneOccupationIncomeDetailsDD,
    sampleCount: 2
}
/* ---------------- ONE OCCUPATION INCOME DETAILS DD START ---------------- */

/* ---------------- OCCUPATION AND INCOME DETAILS FULL DD START ---------------- */
export const occupationAndIncomeFullDomainDD: TrainingDataD = {
    name: 'OccupationAndIncomeFullDomain',
    description: 'This is a summary about occupation and income details data',
    layout: { component: LayoutCd, displayParams: { details: '[[1,1],[30]]' }  },
    structure: {
        mainCustomerName: { dataDD: StringDD, sample: [ 'Mr XXXXXXXXXX J ABCD Fred Bloggs', 'Mr YYYYYYYYY J ABCD Fred Bloggs' ] },
        jointCustomerName: { dataDD: StringDD, sample: [ 'Mr and Mrs XXXXXXXXXX Bloggs', 'Mr and Mrs YYYYYYYYY Bloggs'] },
        mainClientRef: { dataDD: IntegerDD, hidden: true, sample: [ 13606326, 13606329 ] },
        jointClientRef: { dataDD: IntegerDD, hidden: true, sample: [ 43248569, 43248563 ] },
        customerOccupationIncomeDetails: { dataDD: multipleOccupationsIncomeDetailsDD },
    }
}
/* ---------------- OCCUPATION AND INCOME DETAILS FULL DD END ---------------- */

/* ---------------- FROM API DD START ---------------- */
export const fromApiDD: TrainingDataD = {
    name: 'FromApi',
    description: 'This is a summary about what comes from the API',
    structure: {
        occupationAndIncome: { dataDD: occupationAndIncomeFullDomainDD }
    }
}
/* ---------------- FROM API DD END ---------------- */


