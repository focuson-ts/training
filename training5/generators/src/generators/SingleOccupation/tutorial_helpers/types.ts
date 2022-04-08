export interface single_occupation_type {
    fromApi: {
        occupationAndIncome: {
            mainCustomerName: string,
            mainClientRef: number,
            customerOccupationIncomeDetails: { /* ... */ }
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
        dropdowns: {
            employmentStatus: employmentStatus
            contractTypesResponse: contractTypeResponse
            frequenciesResponse: frequenciesResponse
        },
        occupationsList: occupationsList
    },
    tempForOccupationEdit: { /* oneOccupationAndIncome */  },
    tempForAdditionalInfoFirst: { /* additionalInfoFirst */ },
    tempForAdditionalInfoSecond: { /* additionalInfoSecond */ },
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
