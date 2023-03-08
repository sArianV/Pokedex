import { TPokemon } from "@controllers/types";
import { TFormatedPokemon } from "./types";

const formatPokemon = (pokemon: TPokemon):TFormatedPokemon => {
    return {
        id: String(pokemon.id) || "",
        name: pokemon.name || "",
        types: pokemon.types || [],
        imageUrl: pokemon.sprites.front_default || "",
    };
}

export default formatPokemon;