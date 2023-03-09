import { useSetAtom } from "jotai";
import { PokedexLenght } from "@atoms/pokemon";

const useLoadMorePokemons = () => {
  const setPokemonLength = useSetAtom(PokedexLenght);
  
  const loadMorePokemons = () => {
    setPokemonLength((prev) => prev + 8);
  };
  return { loadMorePokemons };
};

export default useLoadMorePokemons;
