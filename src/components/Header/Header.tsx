"use client";

import { useState, useEffect } from "react";
import SearchBar from "@components/TextInput/TextInput";
import styles from "./Header.module.css";
import fetchAsyncPokemons from "../../controllers/fetchPokemons";
import { useSetAtom } from "jotai";
import { PokemonAtom } from "@atoms/pokemon";

const Header = () => {
  const [input, setInput] = useState("");
  const setPokemonResults = useSetAtom(PokemonAtom);
  
  useEffect(() => {
    const searchPokemons = async () => {
      const searchResult = await fetchAsyncPokemons(input)
      setPokemonResults(searchResult)
    }

    searchPokemons()
  }, [input, setPokemonResults])
  
  return (
    <div className={styles.header}>
      <SearchBar input={input} setInput={setInput} debounceTime={2000} fullWidth/>
    </div>
  );
};

export default Header;
