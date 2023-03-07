"use client";

import { PokemonAtom } from "@atoms/pokemon";
import { Typography } from "@mui/material";
import { useAtomValue } from "jotai";

const PokemonList = () => {
    const pokemonResults = useAtomValue(PokemonAtom)
    console.log(pokemonResults);
    
    return (
        <div>
            <Typography variant="h1" component="h2">
            Type & Weakness            </Typography>
        
        </div>
    )
}

export default PokemonList