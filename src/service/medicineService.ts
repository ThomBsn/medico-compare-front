import {MedicineType} from "@/types/medicineTypes";

export async function getAllMedicine(): Promise<MedicineType[]> {
    // const res = await fetch(process.env.REACT_APP_SERVICE_URL + '/medicine');
    // return await res.json();
    const medecines = [
        {
            "id": "1",
            "CIS_code": "61266250",
            "name": "A 313 200 000 UI POUR CENT, pommade",
            "form": "pommade",
            "administration": "cutanée",
            "autorisation": 1,
            "commercialized": true,
            "AMM_date": "12/03/1998",
            "EU_number": "",
            "company": "PHARMA DEVELOPPEMENT",
            "reinforced_surveillance": false
        },
        {
            "id": "2",
            "CIS_code": "62869109",
            "name": "A 313 50 000 U.I., capsule molle",
            "form": "capsule molle",
            "administration": "orale",
            "autorisation": 1,
            "commercialized": true,
            "AMM_date": "07/07/1997",
            "EU_number": "",
            "company": "PHARMA DEVELOPPEMENT",
            "reinforced_surveillance": false
        },
        {
            "id": "3",
            "CIS_code": "61876780",
            "name": "ABACAVIR ARROW 300 mg, comprimé pelliculé sécable",
            "form": "comprimé pelliculé sécable",
            "administration": "orale",
            "autorisation": 1,
            "commercialized": true,
            "AMM_date": "22/10/2019",
            "EU_number": "",
            "company": "ARROW GENERIQUES",
            "reinforced_surveillance": false
        },
        {
            "id": "4",
            "CIS_code": "63797011",
            "name": "ABACAVIR SANDOZ 300 mg, comprimé pelliculé sécable",
            "form": "comprimé pelliculé sécable",
            "administration": "orale",
            "autorisation": 1,
            "commercialized": true,
            "AMM_date": "30/12/2016",
            "EU_number": "",
            "company": "SANDOZ",
            "reinforced_surveillance": false
        },
        {
            "id": "5",
            "CIS_code": "62401060",
            "name": "ABACAVIR VIATRIS 300 mg, comprimé pelliculé sécable",
            "form": "comprimé pelliculé sécable",
            "administration": "orale",
            "autorisation": 1,
            "commercialized": true,
            "AMM_date": "21/02/2018",
            "EU_number": "",
            "company": "VIATRIS SANTE",
            "reinforced_surveillance": false
        },
        {
            "id": "6",
            "CIS_code": "68257528",
            "name": "ABACAVIR/LAMIVUDINE ACCORD 600 mg/300 mg, comprimé pelliculé",
            "form": "comprimé pelliculé",
            "administration": "orale",
            "autorisation": 1,
            "commercialized": false,
            "AMM_date": "16/03/2017",
            "EU_number": "",
            "company": "ACCORD HEALTHCARE FRANCE",
            "reinforced_surveillance": false
        },
    ]
    return medecines;
}