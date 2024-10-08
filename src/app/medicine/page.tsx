'use client'

import {MedicineType} from "@/types/medicineTypes";
import {MedicinesListComponent} from "@/components/medicine/MedicinesListComponent";
import {useEffect, useState} from "react";

export default function Component() {
    const [allMedicines, setAllMedicines] = useState<MedicineType[]>([]);

    useEffect(() => {
        fetch('/api/medicine').then((res) => res.json()).then((data) => setAllMedicines(data))
    }, [])


    // const filteredMedicines = allMedicines.filter((medicine: MedicineType) =>
    //     medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    // )

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">MedicoCompare</h1>
            {/*<Input*/}
            {/*    type="search"*/}
            {/*    placeholder="Search for a medicine..."*/}
            {/*    className="mb-6"*/}
            {/*    value={searchTerm}*/}
            {/*    onChange={(e) => setSearchTerm(e.target.value)}*/}
            {/*/>*/}
            <MedicinesListComponent filteredMedicines={allMedicines} />
        </div>
    );
}