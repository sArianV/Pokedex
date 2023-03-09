import { TPokemonType } from "@controllers/types";

export type TFormatedPokemon = {
  id: string;
  name: string;
  types: TPokemonType[];
  imageUrl: string;
};

export type TPokemonStats = {
  hp?: number;
  attack?: number;
  defense?: number;
  specialAttack?: number;
  specialDefense?: number;
  speed?: number;
}