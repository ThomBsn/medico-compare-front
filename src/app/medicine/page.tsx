'use client'

import {MedicineType} from "@/types/medicineTypes";
import {MedicinesComponent} from "@/components/medicine/MedicinesComponent";
import {useEffect, useState} from "react";

export default function Component() {
    const [allMedicines, setAllMedicines] = useState<MedicineType[]>([]);

    useEffect(() => {
        fetch('/api/medicine').then((res) => res.json()).then((data) => setAllMedicines(data))
    }, [])

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">MedicoCompare</h1>

            <MedicinesComponent allMedicines={allMedicines} />
        </div>
    );
}