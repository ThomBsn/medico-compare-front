'use client'

import {MedicineType} from "@/types/medicineTypes";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Pill} from "lucide-react";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export const FilteredList = ({
                                 filteredMedicineList,
                             }: {
    filteredMedicineList: MedicineType[]
}) => {
    const [administrations, setAdministrations] = useState<string[]>([]);
    const [companies, setCompanies] = useState<string[]>([]);
    const [forms, setForms] = useState<string[]>([]);
    const router = useRouter();

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
        <div>
            {/* <Box sx={{p: 2, display: 'flex', gap: '1rem'}}>
                <h3 className="text-md font-bold my-auto ml-20 w-[280px]">Filtres : </h3>
                <Select>
                    <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Laboratoire"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="empty"></SelectItem>
                        {
                            companies.map((company: string) => {
                                const tmpFormat = company.charAt(0).toUpperCase() + company.slice(1).toLowerCase();
                                return (
                                    <SelectItem value={tmpFormat.toLowerCase()} key={tmpFormat.toLowerCase()}>{tmpFormat}</SelectItem>
                                );
                            })
                        }
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Forme"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="empty"></SelectItem>
                        {
                            forms.map((form: string) => {
                                const tmpFormat = form.charAt(0).toUpperCase() + form.slice(1).toLowerCase();
                                return (
                                    <SelectItem value={tmpFormat.toLowerCase()} key={tmpFormat.toLowerCase()}>{tmpFormat}</SelectItem>
                                );
                            })
                        }
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Administration"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="empty"></SelectItem>
                        {
                            administrations.map((administration: string) => {
                                const tmpFormat = administration.charAt(0).toUpperCase() + administration.slice(1).toLowerCase();
                                return (
                                    <SelectItem value={tmpFormat.toLowerCase()} key={tmpFormat.toLowerCase()}>{tmpFormat}</SelectItem>
                                );
                            })
                        }
                    </SelectContent>
                </Select>
            </Box>*/}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="text-xl mb-2 text-gray-800">Liste de médicaments</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMedicineList.map((medicine: MedicineType) => (
                    <Card className="cursor-pointer bg-white hover:bg-gray-300" key={medicine.id} onClick={() => router.push(`/medicine/${medicine.CIS_code}`)}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Pill className="h-5 w-5"/>
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
                    <p className="text-center text-gray-500 mt-4">Loading...</p>
                )}
            </div>
        </div>
    );
}