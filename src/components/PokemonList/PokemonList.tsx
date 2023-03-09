"use client";

import { PokemonSearchAtom } from "@atoms/pokemon";
import PokemonListItem from "@components/PokemonListItem/PokemonListItem";
import {  Grid } from "@mui/material";
import { useAtomValue } from "jotai";

const PokemonList = () => {
  const searchResult = useAtomValue(PokemonSearchAtom);

  return (
    <Grid container spacing={2} >
      {searchResult.map((pokemon) => (
        <PokemonListItem id={pokemon.id} key={pokemon.name} />
      ))}
    </Grid>
  );
};

export default PokemonList;
