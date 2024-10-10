'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useParams, useRouter } from "next/navigation";
import { Button, Chip, CircularProgress, Typography } from "@mui/material";
import { MedicineType } from "@/types/medicineTypes";
import { useState, useEffect } from "react";

export default function Component() {
    const params = useParams();
    const [medicine, setMedicine] = useState<MedicineType>();
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        fetch(`https://medico-compare-back.vercel.app/specificMedicine/medicine/${params.id}`, { headers: { 'Content-Type': 'application/json' } })
          .then((response) => response.json())
          .then((data) => {
            setMedicine(data.result);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching medicine:', error);
            setLoading(false);
          });
      }, [params.id]);
    
      if (loading) {
        return (
          <div className="container mx-auto p-4 max-w-4xl text-center">
            <CircularProgress />
          </div>
        );
      }

    return (
            <div className="container mx-auto py-8 px-4">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  {medicine?.name ?? "non renseignée"}
                </h1>
                <p className="text-gray-600">CIS Code: {medicine?.CIS_code ?? "non renseignée"}</p>
                <p className="text-gray-600">EU Number: {medicine?.EU_number ?? "non renseignée"}</p>
              </div>
        
              {/* Medicine Information */}
              <Card className="shadow-lg">
                <CardContent>
                  <Typography variant="h6" className="font-semibold text-gray-700 mb-4">
                    Information sur le médicament
                  </Typography>
        
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Forme:</span> {medicine?.form ?? "non renseignée"}
                      </Typography>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Administration:</span>{" "}
                        {medicine?.administration ?? "non renseignée"}
                      </Typography>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Autorisation:</span>{" "}
                        {medicine?.autorisation?.name ?? "non renseignée"}
                      </Typography>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Date d'AMM:</span>{" "}
                        {medicine?.AMM_date ?? "non renseignée"}
                      </Typography>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Commercialisé:</span>{" "}
                        <Chip
                          label={medicine?.commercialized ? "Oui" : "Non"}
                          color={medicine?.commercialized ? "success" : "error"}
                        />
                      </Typography>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Médicament générique:</span>{" "}
                        {medicine?.genericMedicine?.name ?? "non renseignée"}
                      </Typography>
                    </div>
        
                    <div>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Avis SMR:</span>{" "}
                        {medicine?.avisSmr?.avis_smr ?? "non renseignée"}
                      </Typography>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Avis ASMR:</span>{" "}
                        {medicine?.avisAsmr?.avis_asmr ?? "non renseignée"}
                      </Typography>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Surveillance renforcée:</span>{" "}
                        <Chip
                          label={medicine?.reinforced_surveillance ? "Oui" : "Non"}
                          color={medicine?.reinforced_surveillance ? "warning" : "default"}
                        />
                      </Typography>
                      <Typography variant="body1" className="mb-2">
                        <span className="font-semibold">Entreprise:</span>{" "}
                        {medicine?.company ?? "non renseignée"}
                      </Typography>
                    </div>
                  </div>
        
                  <div className="mt-6 text-center">
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: '#1a202c', color: 'white' }}
                      onClick={() => router.push("/medicine")}
                    >
                      Rechercher un autre médicament
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
    )
}