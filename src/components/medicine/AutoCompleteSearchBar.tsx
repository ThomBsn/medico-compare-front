import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, CircularProgress } from '@mui/material'; 
import { useRouter } from 'next/navigation';

interface Medicine { CIS_code: string; name: string; } 

const MedicineAutocomplete: React.FC = () => { 
    const [inputValue, setInputValue] = useState<string>(''); 
    const [options, setOptions] = useState<Medicine[]>([]); 
    const [loading, setLoading] = useState<boolean>(false); 
    const router = useRouter();

    useEffect(() => { 
        if (inputValue.length < 3) {
             setOptions([]); return; 
        }
        const fetchData = async () => { 
            setLoading(true); 
            try { 
                const response = await fetch(`https://medico-compare-back.vercel.app/specificMedicine/autocomplete/${inputValue}`, { headers: { 'Content-Type': 'application/json' } }); 
                if (!response.ok) { 
                    throw new Error(`Erreur HTTP! statut: ${response.status}`); 
                } 
                const data = await response.json(); 
                if (Array.isArray(data.result)) { 
                    setOptions(data.result); 
                } else {
                    console.error('Les données retournées ne sont pas un tableau:', data);
                     setOptions([]); // Définit des options vides en cas de problème 
                } 
            } catch (error) { 
                console.error('Erreur lors de la récupération des données:', error); 
            } finally { setLoading(false); } 
        }; 
        
        const timer = setTimeout(() => { 
            fetchData(); 
        }, 300); 
        
        return () => clearTimeout(timer); 
    }, [inputValue]); 
    
    return ( 
        <Autocomplete 
            freeSolo 
            options={options} 
            getOptionLabel={(option) => typeof option === 'string' ? option : `${option.name} (${option.CIS_code})`}
            loading={loading}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            onChange={(event, value) => {
                if (value && typeof value !== 'string') {
                    router.push(`/medicine/${value.CIS_code}`);
                }
              }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Rechercher un médicament"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
    />
)}
        /> 
    ); 
}; 

export default MedicineAutocomplete;