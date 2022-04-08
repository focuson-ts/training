export interface single_occupation_type {
    fromApi: {
        occupationAndIncome: {
            mainCustomerName: string,
            mainClientRef: number,
            jointCustomerName: string,
            jointClientRef: string,
            customerOccupationIncomeDetails: { /* ... */ }
        },
        dropdowns: {
            employmentStatus: employmentStatus
            contractTypesResponse: contractTypeResponse
        }
    },
    tempForOccupationEdit: {},
}

export interface employmentStatus {
    employmentName: string,
    employmentValue: string
}

export interface contractTypeResponse {
    contractTypeId: number,
    description: string
}
