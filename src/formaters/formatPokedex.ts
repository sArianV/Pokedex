import { TPokdex } from "@controllers/types";

const formatPokedex = (pokedex: TPokdex) => {
  return pokedex.map((pokemon, index) => {
    return {
      id: `${index + 1}`,
      name: pokemon.name || "",
      url: pokemon.url || "",
    };
  }).slice(0, 1008);
};

export default formatPokedex;
