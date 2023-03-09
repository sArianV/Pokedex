import { useRouter } from "next/router";
import useFetchPokemonByNumber from "@hooks/pokemon/useFetchPokemonByNumber";
import { Container, Typography, capitalize, Button, Link } from "@mui/material";
import styles from "./PokemonPage.module.css";
import SpriteList from "@components/SpriteList/SpriteList";
import PokemonType from "@components/PokemonType/PokemonType";
import { LineWave } from "react-loader-spinner";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import { useMemo } from "react";
import formatStats from "../../formaters/formatStats";
import StatsChart from "@components/StatsChart/StatsChart";
import Grid2 from "@mui/material/Unstable_Grid2";

const PokemonPage = () => {
  const router = useRouter();
  const { name } = router?.query as { name: string };

  const { rawPokemon, loading } = useFetchPokemonByNumber({
    id: name,
    fullData: true,
  });

  const { pokemonNumber, pokemonName, pokemonStats } = useMemo(() => {
    return {
      pokemonNumber: String(rawPokemon?.id).padStart(4, "0"),
      pokemonName: capitalize(rawPokemon?.name || ""),
      pokemonStats: rawPokemon ? formatStats(rawPokemon?.stats) : {},
    };
  }, [rawPokemon]);

  return (
    <div className={styles.root}>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "white",
          paddingTop: "2rem",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div className={styles.backButton}>
        <Link href={`/`}>
          <Button  size="large" color="success">
            back
          </Button>
        </Link>
        </div>
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
          <Grid2 container spacing={2}>
            <Grid2 xs={12} pb={4}>
              <Typography
                variant="h4"
                sx={{
                  textDecoration: "underline",
                  textUnderlineOffset: "1rem",
                }}
                color="#6e6c6c"
              >
                {pokemonName}{" "}
              </Typography>
            </Grid2>
            <Grid2 xs={12} md={4}>
              <Grid2 container spacing={2}>
                <SectionTitle title="Info" />
                <Grid2 xs={12}>
                  <Typography variant="h5" color="gray">
                    N°: #{pokemonNumber}
                  </Typography>
                </Grid2>
                <Grid2 xs={12} pb="1rem">
                  <div className={styles.typesContainer}>
                    <Typography variant="h5" color="gray" mr={2}>
                      Types:
                    </Typography>
                    {rawPokemon?.types?.map(({ type: { name } }) => (
                      <PokemonType key={pokemonNumber + name} type={name} />
                    ))}
                  </div>
                </Grid2>
                <Grid2 xs={12} pb=".8rem">
                  <Typography variant="h5" color="gray">
                    Height:{" "}
                    {rawPokemon?.height ? `${rawPokemon?.height / 10}Mt.` : ""}
                  </Typography>
                </Grid2>
                <Grid2 xs={12}>
                  <Typography variant="h5" color="gray">
                    Weight:{" "}
                    {rawPokemon?.weight ? `${rawPokemon?.weight / 10}Kg.` : ""}
                  </Typography>
                </Grid2>
              </Grid2>
            </Grid2>

            <Grid2 xs={12} md={6} mdOffset={2}>
              <Grid2 container spacing={2}>
                <SectionTitle title="Stats" />
                <Grid2 xs={12} pb="1rem">
                  <Container maxWidth="sm">
                    <StatsChart
                      hp={pokemonStats.hp}
                      attack={pokemonStats.attack}
                      defense={pokemonStats.defense}
                      specialAttack={pokemonStats.specialAttack}
                      specialDefense={pokemonStats.specialDefense}
                      speed={pokemonStats.speed}
                    />
                  </Container>
                </Grid2>
              </Grid2>
            </Grid2>
            <SectionTitle title="Sprites" />
            <Grid2 xs={12} pb="1rem">
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
            </Grid2>
          </Grid2>
        )}
      </Container>
    </div>
  );
};

export default PokemonPage;
