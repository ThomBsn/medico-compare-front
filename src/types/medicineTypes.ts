type CustomName = {
    name: string
}

export type MedicineType = {
    id: string,
    CIS_code: string,
    name: string,
    form: string,
    administration: string,
    autorisation: CustomName,
    avisAsmr: CustomName,
    avisSmr: CustomName,
    commercialized: boolean,
    AMM_date: string,
    EU_number: string,
    company: string,
    reinforced_surveillance: boolean
}