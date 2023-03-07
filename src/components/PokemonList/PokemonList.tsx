"use client";

import { PokemonAtom } from "@atoms/pokemon";
import { useAtomValue } from "jotai";

const PokemonList = () => {
    const pokemonResults = useAtomValue(PokemonAtom)
    console.log(pokemonResults);
    
    return (
        <div>
        <h1>Pokemon List</h1>
        </div>
    )
}

export default PokemonList