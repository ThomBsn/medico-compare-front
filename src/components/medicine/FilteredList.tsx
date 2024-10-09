'use client'

import { MedicineType } from "@/types/medicineTypes";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pill } from "lucide-react";
import {useEffect, useState} from "react";

export const FilteredList = ({
        filteredMedicineList,
    }: {
    filteredMedicineList: MedicineType[]
}) => {
    const [administrations, setAdministrations] = useState<string[]>([]);
    const [companies, setCompanies] = useState<string[]>([]);
    const [forms, setForms] = useState<string[]>([]);

    useEffect(() => {
        const allCompanies: string[] = filteredMedicineList.map((medicine: MedicineType) => medicine.company);
        const distinctCompanies: string[] = allCompanies.filter((company, index) => allCompanies.indexOf(company) === index);
        setCompanies(distinctCompanies)

        const allForms: string[] = filteredMedicineList.map((medicine: MedicineType) => medicine.form);
        const distinctForms: string[] = allForms.filter((company, index) => allForms.indexOf(company) === index);
        setForms(distinctForms)

        const allAdministrations: string[] = filteredMedicineList.map((medicine: MedicineType) => medicine.administration);
        const distinctAdministrations: string[] = allAdministrations.filter((company, index) => allAdministrations.indexOf(company) === index);
        setAdministrations(distinctAdministrations)

    }, [filteredMedicineList]);

    return (
        <>
            <Box sx={{ p: 2, display: 'flex', gap: '1rem' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Laboratoire</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={companies}
                        label="Laboratoire"
                        // onChange={(e) => {}
                        // variant={"standard"}
                    >
                        {
                            companies.map((company: string) => {

                                return (
                                    <MenuItem key={company}>{company}</MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Forme</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={forms}
                        label="Forme"
                        // onChange={(e) => {setAdministration(e.target.value)}}
                        // variant={"standard"}
                    >
                        {forms.map((form: string) => {
                            return (
                                <MenuItem key={form}>{form}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Moyen Administration</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={administrations}
                        label="Moyen Administration"
                        // onChange={(e) => {setAdministration(e.target.value)}}
                        // variant={"standard"}
                    >
                        {administrations.map((administration: string) => {
                            return (
                                <MenuItem key={administration}>{administration}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMedicineList.map((medicine: MedicineType) => (
                    <Card key={medicine.id}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Pill className="h-5 w-5" />
                                {medicine.name}
                                {medicine.CIS_code}
                            </CardTitle>
                            <CardDescription>{medicine.AMM_date}</CardDescription>
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
                {filteredMedicineList.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">No medicines found matching your search.</p>
                )}
            </div>
        </>
    );
}