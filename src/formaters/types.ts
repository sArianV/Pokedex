import { TPokemonType } from "@controllers/types";

export type TFormatedPokemon = {
  id: string;
  name: string;
  types: TPokemonType[];
  imageUrl: string;
};
