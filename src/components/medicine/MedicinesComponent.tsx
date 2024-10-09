import {MedicineType} from "@/types/medicineTypes";
import MedicineAutocomplete from "@/components/medicine/AutoCompleteSearchBar";
import {FilteredList} from "@/components/medicine/FilteredList";

export const MedicinesComponent = ({
       allMedicines = []
    }: {allMedicines: MedicineType[]}) => {
    return (
        <>
            <FilteredList filteredMedicineList={allMedicines}/>
        </>
    )
};