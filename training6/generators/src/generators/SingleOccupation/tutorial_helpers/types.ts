export interface single_occupation_type {
    fromApi: {
        occupationAndIncome: {
            mainCustomerName: string,
            mainClientRef: number,
            customerOccupationIncomeDetails: { /* occupationAndIncomeSample --> look there */ }
        },
        dropdowns: {
            employmentStatus: employmentStatus
            contractTypesResponse: contractTypeResponse
        }
    },
    tempForOccupationEdit: {},
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
