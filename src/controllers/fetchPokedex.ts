import { pokeApi } from "../services/pokeApi/pokeApi";
import { TPokdex } from "./types";

const fetchAsyncPokedex = async () => {
  let query = "pokemon?limit=9999";
  try {
    const response = await pokeApi(query);

    return response?.data?.results as TPokdex
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchAsyncPokedex;
