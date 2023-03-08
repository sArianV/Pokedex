import { PokedexAtom } from "@atoms/pokemon";
import Header from "@components/Header/Header";
import PokemonList from "@components/PokemonList/PokemonList";
import fetchAsyncPokedex from "@controllers/fetchPokedex";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import formatPokedex from "../formaters/formatPokedex";
import styles from "./HomePage.module.css";
const Home = () => {
  const setPokedex = useSetAtom(PokedexAtom)

  useEffect(() => {
    const fetchPokedex = async () =>{
      const pokemons = await fetchAsyncPokedex()

      setPokedex(formatPokedex(pokemons))
    }
    fetchPokedex()
  }, [setPokedex])
  
  return (
    <div className={styles.root}>
      <Header />
      <PokemonList />
    </div>
  );
};

export default Home;
