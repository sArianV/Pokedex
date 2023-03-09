import { useRouter } from "next/router";
import useFetchPokemonByNumber from "@hooks/pokemon/useFetchPokemonByNumber";
import { Container,Typography, Grid } from "@mui/material";
import styles from "./PokemonPage.module.css";
import Image from "next/image";
import SpriteList from "@components/SpriteList/SpriteList";

const PokemonPage = () => {
  const router = useRouter();
  const { name } = router?.query as { name: string };

  const { rawPokemon, loading } = useFetchPokemonByNumber({
    id: name,
    fullData: true,
  });

  console.log(rawPokemon);

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
        <Typography variant="h5" > Pokemon: {name}</Typography>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6}  xs={12} pb="1rem">
            
            <SpriteList 
              showTags
              frontDefault={rawPokemon?.sprites?.front_default}
              frontFemale={rawPokemon?.sprites?.front_female }
              frontShiny={rawPokemon?.sprites?.front_shiny}
              frontShinyFemale={rawPokemon?.sprites?.front_shiny_female}
              backDefault={rawPokemon?.sprites?.back_default }
              backFemale={ rawPokemon?.sprites?.back_female}
              backShiny={rawPokemon?.sprites?.back_shiny}
              backShinyFemale={rawPokemon?.sprites?.back_shiny_female}
            />
            

          </Grid>
          <Grid item lg={6} md={6} xs={12} >
            <div style={{backgroundColor: "burlywood", width:"100%"}}>
            <Image src={rawPokemon?.sprites?.front_default || ""} height={200} width={200} alt="" />

            </div>
          </Grid>
        </Grid>
        
      </Container>
    </div>
  );
};

export default PokemonPage;
