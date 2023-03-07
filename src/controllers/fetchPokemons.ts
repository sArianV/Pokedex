import { pokeApi } from "../services/pokeApi/pokeApi";

const fetchAsyncPokemons = async (input: string) => {
  let query = "pokemon";
  if (input) query = `${query}/${input}`;
  try {
    const response = await pokeApi(query);
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchAsyncPokemons;
