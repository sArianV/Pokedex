import { PokedexAtom } from "@atoms/pokemon";
import Header from "@components/Header/Header";
import PokemonList from "@components/PokemonList/PokemonList";
import fetchAsyncPokedex from "@controllers/fetchPokedex";
import useLoadMorePokemons from "@hooks/pokemon/useLoadMorePokemons";
import { useSetAtom } from "jotai";
import { useEffect, useCallback } from "react";
import formatPokedex from "../formaters/formatPokedex";
import styles from "./HomePage.module.css";

const Home = () => {
  const setPokedex = useSetAtom(PokedexAtom);
  const { loadMorePokemons } = useLoadMorePokemons();

  useEffect(() => {
    const fetchPokedex = async () => {
      const pokemons = await fetchAsyncPokedex();

      setPokedex(formatPokedex(pokemons));
    };
    fetchPokedex();
  }, [setPokedex]);

  const handleScroll = useCallback(
    (e: any) => {
      const bottom =
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) {
        loadMorePokemons();
      }
    },
    [loadMorePokemons]
  );

  return (
    <div className={styles.root} onScroll={handleScroll}>
      <Header />
      <PokemonList />
    </div>
  );
};

export default Home;
