import PokemonCard from "@components/PokemonCard/PokemonCard";
import useFetchPokemonByNumber from "@hooks/pokemon/useFetchPokemonByNumber";
import { memo } from "react";
const PokemonListItem = ({ id }: { id: string }) => {
    const { pokemon, loading } = useFetchPokemonByNumber({ id });
    
    if (!pokemon || loading) return <div> Loading... </div>;
    return (
        <PokemonCard 
            name={pokemon?.name} 
            imageUrl={pokemon?.imageUrl}
            types={pokemon?.types}
            id={pokemon?.id}
        />
    )
};

export default memo(PokemonListItem);
