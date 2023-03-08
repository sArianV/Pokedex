import { pokeApi } from "../services/pokeApi/pokeApi";
import { TPokemon, TPokdex } from "./types";

const fetchAsyncPokemon = async (input: string) => {
  if (!input) return null;
  const url = `pokemon/${input}`;
  try {
    const response = await pokeApi(url);

    return response?.data as TPokemon
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchAsyncPokemon;
