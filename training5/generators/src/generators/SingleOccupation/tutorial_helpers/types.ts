export interface single_occupation_type {
    fromApi: {
        occupationAndIncome: {
            mainCustomerName: string,
            mainClientRef: number,
            customerOccupationIncomeDetails: { /* occupationAndIncomeSample --> look there */ }
        },
        additionalInfoFirst: {
            applicantName: string,
            employerName: string,
            addressLine1: string,
            addressLine2: string,
            addressLine3: string,
            addressLine4: string,
            postcode: string
        },
        additionalInfoSecond: {
            businessDetails: {
                applicantName: string,
                businessName: string,
                addressLine1: string,
                addressLine2: string,
                addressLine3: string,
                addressLine4: string,
                postcode: string
            },
            businessFinancialDetails: {
                turnoverLastYear: string,
                turnoverPenultimateYear: string,
                netProfitLastYear: string,
                netProfitPenultimateYear: string,
                drawingsLastYear: string,
                drawingsPenultimateYear: string,
                dividendsLastYear: string,
                dividendsPenultimateYear: string,
                netAssetsLastYear: string,
                netAssetsPenultimateYear: string
            },
            detailsOfNonRecurringItems: {
                nonRecurringItems: string
            },
            detailsOfReevaluationOfAssets: {
                revaluationOfAssets: string
            },
            accountantDetails: {
                contactForename: string,
                contactSurname: string,
                practice: string,
                addressLine1: string,
                addressLine2: string,
                addressLine3: string,
                addressLine4: string,
                postcode: string,
                telephone: string
            }
        },
        otherSourcesOfIncome: {
            clientOtherIncomeSeq: string,
            otherIncomeType: string,
            incomeFreqRef: frequenciesResponse,
            amount: number
        },
        dropdowns: {
            employmentStatus: employmentStatus
            contractTypesResponse: contractTypeResponse
            frequenciesResponse: frequenciesResponse
        },
        occupationsList: occupationsList
    },
    temp: {},
}

export interface frequenciesResponse {
    frequencyId: number,
    frequencyDescription: string
}

export interface occupationsList {
    descTypeValue: string,
    descTypeName: string
}

export interface employmentStatus {
    employmentName: string,
    employmentValue: string
}

export interface contractTypeResponse {
    contractTypeId: number,
    description: string
}
