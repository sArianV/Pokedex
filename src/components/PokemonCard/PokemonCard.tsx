"use client";

import PokemonType from "@components/PokemonType/PokemonType";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { capitalize } from "lodash";
import Image from "next/image";
import { memo } from "react";
import { TFormatedPokemon } from "../../formaters/types";
import styles from "./PokemonCard.module.css";

const PokemonCard = ({ id, name, imageUrl, types }: TFormatedPokemon) => {
  const pokemonName = capitalize(name);
  const pokemonNumber = id.padStart(4, "0");
  

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={styles.root}>
      <Paper elevation={1} className={styles.paper}>
        <div className={styles.imageContainer}>
          <Image src={imageUrl} height={200} width={200} alt="" />
        </div>
        <Divider />
        <div className={styles.infoContainer}>
          <Typography variant="subtitle2" color="gray">
            #{pokemonNumber}
          </Typography>
          <Typography variant="h5">{pokemonName}</Typography>
          <div className={styles.typesContainer}>
            {types.map(({ type: { name } }) => (
              <PokemonType
                key={pokemonNumber + name}
                type={name}
              />
            ))}
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default memo(PokemonCard);
