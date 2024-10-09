import {MedicineType} from "@/types/medicineTypes";
import {AutoCompleteSearchBar} from "@/components/medicine/AutoCompleteSearchBar";
import {FilteredList} from "@/components/medicine/FilteredList";

export const MedicinesComponent = ({
       allMedicines = []
    }: {allMedicines: MedicineType[]}) => {
    return (
        <>
            <AutoCompleteSearchBar proposedMedecines={allMedicines}/>
            <FilteredList filteredMedicineList={allMedicines}/>
        </>
    )
};