"use client";

import {
  PokedexInput,
  PokemonSearchAtom,
} from "@atoms/pokemon";
import { Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import styles from "./PokemonList.module.css";
const PokemonList = () => {
  const search = useAtomValue(PokemonSearchAtom);
  console.log(search);
  
  return (
    <div className={styles.root}>
      <div style={{display: "flex", flexDirection:"column"}}>
        {/* { pokemonList &&
          pokemonList?.map((pokemon) => (
            <Typography variant="h5" key={pokemon.name}>
              {pokemon.name}              
            </Typography>
          ))
        } */}
      </div>
      {/* { searchResult &&
        <Typography variant="h5"  >
          {searchResult.name}
        </Typography>
      } */}
    </div>
  );
};

export default PokemonList;
