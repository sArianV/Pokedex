"use client";

import { PokemonSearchAtom } from "@atoms/pokemon";
import PokemonListItem from "@components/PokemonListItem/PokemonListItem";
import { Container, Grid } from "@mui/material";
import { useAtomValue } from "jotai";
import styles from "./PokemonList.module.css";
const PokemonList = () => {
  const searchResult = useAtomValue(PokemonSearchAtom);

  return (
    <div className={styles.root}>
      <Container maxWidth="lg" sx={{
        backgroundColor: "white",
        paddingTop: "3rem",
        height: "100%",
      }}>
        <Grid container spacing={2}>
          {searchResult.map((pokemon) => (
            <PokemonListItem id={pokemon.id} key={pokemon.name} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PokemonList;
