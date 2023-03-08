import { TPokdex } from "@controllers/types";
import { atom } from "jotai";
import { isNaN } from "lodash";

export const PokedexAtom = atom<TPokdex>([]);
export const PokedexInput = atom<string>("");
export const PokedexLenght = atom<number>(8);

export const PokemonSearchAtom = atom((get) => {
  const pokedex = get(PokedexAtom) as TPokdex;
  const input = get(PokedexInput);
  const lenght = get(PokedexLenght);

  if (!pokedex) return [];
  if (input === "") return pokedex.slice(0, lenght);

  if (!isNaN(Number(input)))
    return pokedex
      .filter((pokemon) => pokemon.id.toString().includes(input))
      .slice(0, lenght);

  return pokedex
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(input.toLowerCase())
    )
    .slice(0, lenght);   
});
