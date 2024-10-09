import {Autocomplete, Box, TextField} from "@mui/material";
import {MedicineType} from "@/types/medicineTypes";
import {useEffect, useState} from "react";

export const AutoCompleteSearchBar = ({
        proposedMedecines
    }: {
    proposedMedecines: MedicineType[]
}) => {
    const [medicineNames, setMedicineNames] = useState<string[]>([]);
    useEffect(() => {
        const tmpMedicineNames: string[] = []
        proposedMedecines.map((medicine: MedicineType) => {
            tmpMedicineNames.push(medicine.name);
        })
        console.log(tmpMedicineNames);
        setMedicineNames(tmpMedicineNames);
    }, [proposedMedecines]);

    return (
        <Box sx={{ m: 2 }}>
            <Autocomplete
                freeSolo
                options={medicineNames}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Medicine" />}
            />
        </Box>
    );
}