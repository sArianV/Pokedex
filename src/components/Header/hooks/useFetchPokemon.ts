import { PokemonAtom } from "@atoms/pokemon";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import fetchAsyncPokemons from "@controllers/fetchPokemons";

const useFetchPokemon = (pokemon: string) => {
    const [loading, setLoading] = useState(false)
    const setPokemonResults = useSetAtom(PokemonAtom);
    
    useEffect(() => {
      const searchPokemons = async () => {
        setLoading(true)
        const searchResult = await fetchAsyncPokemons(pokemon)
        setPokemonResults(searchResult)
        return setLoading(false)
      }
      
      searchPokemons()
    }, [pokemon, setPokemonResults])

    return { loading }
}

export default useFetchPokemon