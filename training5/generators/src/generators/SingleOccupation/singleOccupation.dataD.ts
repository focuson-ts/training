import { TrainingDataD, TrainingRepeatingD } from "../common";
import { DateDD, IntegerDD, LabelAndDropDownCD, LayoutCd, OneLineStringDD, StringDD, StringPrimitiveDD, TableCD } from "@focuson/forms";
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
export const frequencyDD: StringPrimitiveDD = {
    ...OneLineStringDD,
    sample: [ 'Annual', 'Monthly' ],
    name: 'Frequency',
    description: "Income frequency",
    display: LabelAndDropDownCD,
    enum: HowOften
}
export const employmentTypeDD: StringPrimitiveDD = {
    ...OneLineStringDD,
    name: 'EmploymentType',
    description: "Employment contract type",
    display: LabelAndDropDownCD,
    enum: EmploymentType
}

/* ---------------- ADDITIONAL INFO SECOND DD START ---------------- */
export const additionalInfoSecondDD: TrainingDataD = {
    name: 'AdditionalInfoSecond',
    description: 'This is a summary about business details information data',
    structure: {
        turnoverLastYear: { dataDD: StringDD, sample: [ '10,000', '11,000' ] },
        turnoverPenultimateYear: { dataDD: StringDD, sample: [ '11,000', '12,000' ] },
        netProfitLastYear: { dataDD: StringDD, sample: [ '12,000', '13,000' ] },
        netProfitPenultimateYear: { dataDD: StringDD, sample: [ '9,000', '10,000' ] },
        drawingsLastYear: { dataDD: StringDD, sample: [ '13,000', '14,000' ] },
        drawingsPenultimateYear: { dataDD: StringDD, sample: [ '100,000', '110,000' ] },
        dividendsLastYear: { dataDD: StringDD, sample: [ '15,000', '20,000' ] },
        dividendsPenultimateYear: { dataDD: StringDD, sample: [ '3,000', '4,000' ] },
        netAssetsLastYear: { dataDD: StringDD, sample: [ '1,000', '2,000' ] },
        netAssetsPenultimateYear: { dataDD: StringDD, sample: [ '2,000', '3,000' ] },
    }
}
/* ---------------- ADDITIONAL INFO SECOND DD END ---------------- */

/* ---------------- ADDITIONAL INFO FIRST DD START ---------------- */
export const additionalInfoFirstDD: TrainingDataD = {
    name: 'AdditionalInfoFirst',
    description: 'This is a summary about first additional information data',
    structure: {
        applicantName: { dataDD: StringDD, sample: [ 'Mr XXXXXXXXXX ABCD Fred Bloggs', 'Mr YYYYYYYYY ABCD Fred Bloggs' ] },
        employerName: { dataDD: StringDD, sample: [ 'AnalystXYZ', 'AnalystZZZ' ] },
        addressLine1: { dataDD: StringDD, sample: [ 'Pinetrees Road', 'Cobalt Street' ] },
        addressLine2: { dataDD: StringDD, sample: [ 'Norwich', 'Greenwithc' ] },
        addressLine3: { dataDD: StringDD, sample: [ 'Norfolk', 'Nordah' ] },
        addressLine4: { dataDD: StringDD, sample: [ 'Norfolkkk', 'Norfolyyyy' ] },
        postcode: { dataDD: StringDD, sample: [ 'PLXYZ', 'YHFKLR' ] },
    }
}
/* ---------------- ADDITIONAL INFO FIRST DD END ---------------- */

/* ---------------- LIST OCCUPATIONS DD START ---------------- */
export const listOccupationsDD: TrainingDataD = {
    name: "ListOccupations",
    description: "The search for occupation in the big list of occupations: occupation field ",
    structure: {
        descTypeValue: { dataDD: StringDD, hidden: true, sample: ['W54', 'W60'] },
        descTypeName: { dataDD: StringDD, sample: ['Hair Dresser','Engineer'] },
    }
}
/* ---------------- LIST OCCUPATIONS DD END ---------------- */

/* ---------------- ONE OCCUPATION INCOME DETAILS DD START ---------------- */
export const oneOccupationIncomeDetailsDD: TrainingDataD = {
    name: "OneOccupationIncomeDetails",
    description: "This is a summary about occupation income details data of a single occupation",
    layout: { component: LayoutCd, displayParams: { details:  '[[30]]' , title:  ['Current employment details - '] } },
    guards: {
        areYou: { condition: 'in', path: 'areYou', values: customerStatusDD.enum },
        ownShareOfTheCompany: { condition: 'in', path: 'ownShareOfTheCompany', values: yesNoDD.enum },
        owningSharesPct: { condition: 'in', path: 'owningSharesPct', values: yesNoDD.enum },
        employmentType: { condition: 'in', path: 'employmentType', values: employmentTypeDD.enum },
    },
    structure: {
        areYou: { dataDD: customerStatusDD, displayParams: { label: "Are you... ", buttons: ['additionalInfoFirst', 'additionalInfoSecond'] } },
        occupation: { dataDD: StringDD, displayParams: { label: "What is your occupation? ", buttons: ['list'] }, guard: { areYou: [ 'E', 'S' ] }, sample: [ 'Hair Dresser', 'Engineer' ]  },
        customerDescription: { dataDD: StringDD, displayParams: { label: "Customers description: " }, guard: { areYou: [ 'E', 'S' ] }, sample: [ 'XXXXXXXXX', 'YYYYYYYYY' ] },
        ownShareOfTheCompany: { dataDD: yesNoDD, displayParams: { label: "Do you own a share of the company? " }, guard: { areYou: [ 'E' ] } },
        owningSharesPct: { dataDD: yesNoDD, displayParams: { label: "Is this 20% or more of it? " }, guard: { areYou: [ 'E' ], ownShareOfTheCompany: [ 'Y' ] } },
        workFor: { dataDD: StringDD, displayParams: { label: "Who do you work for? " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] }, sample: [ 'Hair Saloon', 'S.C. Bosch S.R.L.' ] },
        employmentType: { dataDD: employmentTypeDD, displayParams: { label: "Is this employment... " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] } },
        empStartDate: { dataDD: DateDD, displayParams: { label: "When did this employment start? (mm/yyyy) " }, guard: { areYou: [ 'E' ], employmentType: [ '1' ] }, sample: [ '10/2002', '10/2005' ] },
        empEndDate: { dataDD: DateDD, displayParams: { label: "When will it finish? (mm/yyyy) " }, guard: { areYou: [ 'E' ], employmentType: [ '2', '3' ] }, sample: ['10/2010', '10/2020'] },
        annualSalaryBeforeDeduction: { dataDD: IntegerDD, displayParams: { label: "What is your annual salary? (before deductions) " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] }, sample: [ 20315, 20330 ] },
        annualIncomeExcludingRent: { dataDD: IntegerDD, displayParams: { label: "Do you have any other guaranteed annual income? (excluding rent) " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] }, sample: [ 13255, 13252 ] },
        regularCommissionBonus: { dataDD: IntegerDD, displayParams: { label: "Do you have any regular commission, bonus or overtime? " }, guard: { areYou: [ 'E' ], owningSharesPct: [ 'N' ] }, sample: [ 500, 1000 ] },
        whatTypeOfBusiness: { dataDD: StringDD, displayParams: { label: "What type of business is it? " }, guard: { areYou: [ 'E', 'S' ], owningSharesPct: [ 'Y' ] }, sample: [ 'Saloon', 'Electrical Technical Support' ]   },
        whatNameBusiness: { dataDD: StringDD, displayParams: { label: "What is its name: " }, guard: { areYou: [ 'E', 'S' ], owningSharesPct: [ 'Y' ] }, sample: [ 'XXXXXXXXX', 'YYYYYYYYY' ] },
        establishedYear: { dataDD: StringDD, displayParams: { label: "When was it established? (MM/YYYY) " }, guard: { areYou: [ 'E', 'S' ], owningSharesPct: [ 'Y' ] }, sample: [ '10/2011', '11/2010' ] },
        annualDrawing3Yrs: { dataDD: IntegerDD, displayParams: { label: "What are your average annual drawings over the past 3 years? " }, guard: { areYou: [ 'E', 'S' ], owningSharesPct: [ 'Y' ] }, sample: [ 100000, 200000 ] },
        createdBy: { dataDD: StringDD, displayParams: { label: "Entry created by: " }, sample: [ 'Seras Alin', 'Seras Alin' ] },
        empEmploymentSeq: { dataDD: IntegerDD, hidden: true, sample: [ 999998, 999999 ] },
        accountantAppRoleSeq: { dataDD: IntegerDD, hidden: true, sample: [ 14648851, 14648852 ] },
        clientRef: { dataDD: IntegerDD, hidden: true, sample: [123, 345] }
    }
}
/* ---------------- ONE OCCUPATION INCOME DETAILS DD START ---------------- */

/* ---------------- OCCUPATION AND INCOME DETAILS FULL DD START ---------------- */
export const occupationAndIncomeFullDomainDD: TrainingDataD = {
    name: 'OccupationAndIncomeFullDomain',
    description: 'This is a summary about occupation and income details data',
    layout: { component: LayoutCd, displayParams: { details: '[[1,1],[30]]' }  },
    structure: {
        mainCustomerName: { dataDD: StringDD, sample: [ 'Mr XXXXXXXXXX J ABCD Fred Bloggs', 'Mr YYYYYYYYY J ABCD Fred Bloggs' ] },
        mainClientRef: { dataDD: IntegerDD, hidden: true, sample: [ 13606326, 13606329 ] },
        customerOccupationIncomeDetails: { dataDD: oneOccupationIncomeDetailsDD },
    }
}
/* ---------------- OCCUPATION AND INCOME DETAILS FULL DD END ---------------- */

/* ---------------- FROM API DD START ---------------- */
export const fromApiDD: TrainingDataD = {
    name: 'FromApi',
    description: 'This is a summary about what comes from the API',
    structure: {
        occupationAndIncome: { dataDD: occupationAndIncomeFullDomainDD },
        additionalInfoFirst: { dataDD: additionalInfoFirstDD },
        additionalInfoSecond: { dataDD: additionalInfoSecondDD },
        occupationsList: { dataDD: listOccupationsDD }
    }
}
/* ---------------- FROM API DD END ---------------- */


