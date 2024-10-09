'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pill, Clock, AlertTriangle, Ban, Shuffle } from "lucide-react"
import { useParams } from "next/navigation";
import {Button} from "@mui/material";

export default function Component() {
    const params = useParams();
    // Dans un cas réel, ces données proviendraient d'une API ou d'une base de données
    const medicament = {
        nom: "Paracétamol",
        description: "Analgésique et antipyrétique utilisé pour soulager la douleur et réduire la fièvre.",
        categorie: "Analgésique",
        posologie: "500 à 1000 mg toutes les 4 à 6 heures, ne pas dépasser 4000 mg par jour.",
        administration: "Voie orale. À prendre avec un grand verre d'eau, de préférence au cours des repas.",
        effetsSecondaires: [
            "Réactions allergiques (rares)",
            "Troubles hépatiques en cas de surdosage",
            "Nausées ou vomissements (peu fréquents)"
        ],
        contreIndications: [
            "Allergie au paracétamol",
            "Maladie grave du foie",
            "Consommation excessive d'alcool"
        ],
        interactions: [
            "Warfarine (surveillance accrue nécessaire)",
            "Certains antiépileptiques",
            "Consommation régulière et importante d'alcool"
        ]
    }

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <Button variant="outlined" sx={{color: "black", borderColor: "black"}} className="mb-4" href="/medicine">
                &larr; Retour à la recherche
            </Button>

            <Card className="mb-6">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-3xl font-bold flex items-center gap-2">
                            <Pill className="h-8 w-8" />
                            {medicament.nom}
                        </CardTitle>
                        <Badge variant="secondary" className="text-lg">{medicament.categorie}</Badge>
                    </div>
                    <CardDescription className="text-lg">{medicament.description}</CardDescription>
                </CardHeader>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5" />
                            Posologie et Administration
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2"><strong>Posologie :</strong> {medicament.posologie}</p>
                        <p><strong>Administration :</strong> {medicament.administration}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" />
                            Effets Secondaires
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5">
                            {medicament.effetsSecondaires.map((effet, index) => (
                                <li key={index}>{effet}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Ban className="h-5 w-5" />
                            Contre-indications
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5">
                            {medicament.contreIndications.map((contreIndication, index) => (
                                <li key={index}>{contreIndication}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shuffle className="h-5 w-5" />
                            Interactions Médicamenteuses
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5">
                            {medicament.interactions.map((interaction, index) => (
                                <li key={index}>{interaction}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}