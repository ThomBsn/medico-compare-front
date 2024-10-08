import {NextRequest} from "next/server";
import {getAllMedicine} from "@/service/medicineService";
import {MedicineType} from "@/types/medicineTypes";


export const GET = async (
) => {
    const medecines: MedicineType[] = await getAllMedicine();
    if (medecines.length === 0) return Response.json({ error: "No Medecine Found." });

    return Response.json(medecines);
};