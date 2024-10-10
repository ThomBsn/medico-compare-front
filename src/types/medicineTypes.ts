type CustomName = {
    name: string
}

type avisAsmr = {
    avis_asmr: string
}

type avisSmr = {
    avis_smr: string
}

export type MedicineType = {
    id: string,
    CIS_code: string,
    name: string,
    form: string,
    administration: string,
    autorisation: CustomName,
    avisAsmr: avisAsmr,
    avisSmr: avisSmr,
    commercialized: boolean,
    genericMedicine: CustomName,
    AMM_date: string,
    EU_number: string,
    company: string,
    reinforced_surveillance: boolean
}