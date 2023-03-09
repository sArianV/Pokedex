import { useRouter } from "next/router";
import useFetchPokemonByNumber from "@hooks/pokemon/useFetchPokemonByNumber";
import {
  Container,
  Typography,
  Grid,
  capitalize,
  Divider,
} from "@mui/material";
import styles from "./PokemonPage.module.css";
import Image from "next/image";
import SpriteList from "@components/SpriteList/SpriteList";
import PokemonType from "@components/PokemonType/PokemonType";
import { LineWave } from "react-loader-spinner";

const PokemonPage = () => {
  const router = useRouter();
  const { name } = router?.query as { name: string };

  const { rawPokemon, loading } = useFetchPokemonByNumber({
    id: name,
    fullData: true,
  });

  const pokemonNumber = String(rawPokemon?.id).padStart(4, "0");
  const pokemonName = capitalize(name || "");
  return (
    <div className={styles.root}>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "white",
          paddingTop: "3rem",
          minHeight: "100vh",
        }}
      >
        {loading ? (
          <div className={styles.loadingContainer}>
            <LineWave
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="line-wave"
              visible={true}
            />
          </div>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">{pokemonName} </Typography>
            </Grid>
            <Grid item xs={12} pb="1rem">
              <Typography variant="h5" my={2} textAlign="center">
                Info
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" color="gray">
                N°: #{pokemonNumber}
              </Typography>
            </Grid>
            <Grid item xs={12} pb="1rem">
              <div className={styles.typesContainer}>
                <Typography variant="h5" color="gray" mr={2}>
                  Types:
                </Typography>
                {rawPokemon?.types?.map(({ type: { name } }) => (
                  <PokemonType key={pokemonNumber + name} type={name} />
                ))}
              </div>
            </Grid>
            <Grid item xs={12} pb="1rem">
              <Typography variant="h5" my={2} textAlign="center">
                Sprites
              </Typography>
              <Divider />
              <SpriteList
                showTags
                frontDefault={rawPokemon?.sprites?.front_default}
                frontFemale={rawPokemon?.sprites?.front_female}
                frontShiny={rawPokemon?.sprites?.front_shiny}
                frontShinyFemale={rawPokemon?.sprites?.front_shiny_female}
                backDefault={rawPokemon?.sprites?.back_default}
                backFemale={rawPokemon?.sprites?.back_female}
                backShiny={rawPokemon?.sprites?.back_shiny}
                backShinyFemale={rawPokemon?.sprites?.back_shiny_female}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default PokemonPage;
