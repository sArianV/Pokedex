import fetchAsyncPokemon from "@controllers/fetchPokemons";
import { TPokemon } from "@controllers/types";
import { useEffect, useState } from "react";
import formatPokemon from "../../formaters/formatPokemon";
import { TFormatedPokemon } from "../../formaters/types";

const useFetchPokemonByNumber = ({
  id,
  fullData,
}: {
  id: string;
  fullData?: boolean;
}) => {
  const [pokemon, setPokemon] = useState<TFormatedPokemon | null>(null);
  const [rawPokemon, setRawPokemon] = useState<TPokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetchAsyncPokemon(id);
        if (!response) return;
        if (fullData) return setRawPokemon(response as TPokemon);
        return setPokemon(formatPokemon(response as TPokemon));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  return { pokemon, rawPokemon, loading };
};

export default useFetchPokemonByNumber;
