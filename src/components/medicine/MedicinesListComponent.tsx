import {MedicineType} from "@/types/medicineTypes";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Pill} from "lucide-react";
import {Badge} from "@/components/ui/badge";

export const MedicinesListComponent = ({
                                           filteredMedicines
                                       }: {filteredMedicines: MedicineType[]}) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMedicines.map((medicine: MedicineType) => (
                    <Card key={medicine.id}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Pill className="h-5 w-5"/>
                                {medicine.name}
                            </CardTitle>
                            <CardDescription>{medicine.CIS_code}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p><strong>Administration:</strong> {medicine.administration}</p>
                        </CardContent>
                        <CardFooter>
                            <Badge>{medicine.company}</Badge>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div>
                {filteredMedicines.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">No medicines found matching your search.</p>
                )}
            </div>
        </>
    )
};