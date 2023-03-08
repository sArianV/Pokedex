import { pokeApi } from "../services/pokeApi/pokeApi";
import { TPokemon, TPokemonList } from "./types";

const fetchAsyncPokemons = async (input: string) => {
  let query = "pokemon";
  if (input && input !== "") query = `${query}/${input}`;
  try {
    const response = await pokeApi(query);
    const result = response?.data?.results
      ? (response?.data?.results as TPokemonList)
      : (response?.data as TPokemon);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchAsyncPokemons;
