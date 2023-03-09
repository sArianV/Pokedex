"use client";

import PokemonType from "@components/PokemonType/PokemonType";
import SpriteList from "@components/SpriteList/SpriteList";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { capitalize } from "lodash";
import Link from "next/link";
import { memo } from "react";
import { TFormatedPokemon } from "../../formaters/types";
import styles from "./PokemonCard.module.css";

const PokemonCard = ({ id, name, imageUrl, types }: TFormatedPokemon) => {
  const pokemonName = capitalize(name);
  const pokemonNumber = id.padStart(4, "0");

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={styles.root}>
      <Link href={`/pokemon/${name}`}>
        <Paper elevation={1} className={styles.paper}>
          <div className={styles.imageContainer}>
          <SpriteList 
            frontDefault={imageUrl}
          /> 
          </div>
          <Divider />
          <div className={styles.infoContainer}>
            <Typography variant="subtitle2" color="gray">
              #{pokemonNumber}
            </Typography>
            <Typography variant="h5">{pokemonName}</Typography>
            <div className={styles.typesContainer}>
              {types.map(({ type: { name } }) => (
                <PokemonType key={pokemonNumber + name} type={name} />
              ))}
            </div>
          </div>
        </Paper>
      </Link>
    </Grid>
  );
};

export default memo(PokemonCard);
