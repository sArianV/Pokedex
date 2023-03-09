import { PokedexAtom } from "@atoms/pokemon";
import Header from "@components/Header/Header";
import PokemonList from "@components/PokemonList/PokemonList";
import fetchAsyncPokedex from "@controllers/fetchPokedex";
import useLoadMorePokemons from "@hooks/pokemon/useLoadMorePokemons";
import useScroll from "@hooks/useScroll/useScroll";
import { Button, Container, IconButton } from "@mui/material";
import { useSetAtom } from "jotai";
import { useEffect, useCallback } from "react";
import formatPokedex from "../formaters/formatPokedex";
import styles from "./HomePage.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Home = () => {
  const setPokedex = useSetAtom(PokedexAtom);
  const { loadMorePokemons } = useLoadMorePokemons();

  useEffect(() => {
    const fetchPokedex = async () => {
      const pokemons = await fetchAsyncPokedex();

      setPokedex(formatPokedex(pokemons));
    };
    fetchPokedex();
  }, [setPokedex]);

  const handleScroll = useCallback(
    (e: any) => {
      const bottom =
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) {
        loadMorePokemons();
      }
    },
    [loadMorePokemons]
  );

  const [executeScroll, elRef] = useScroll();
  return (
    <div className={styles.root} onScroll={handleScroll}>
      <div ref={elRef}>
        <Header />
      </div>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "white",
          paddingTop: "3rem",
          minHeight: "100vh",
        }}
      >
        <PokemonList />
      </Container>
      <IconButton
        size="large"
        className={styles.stickyButton}
        onClick={executeScroll}
        color="success"
      >
        <ArrowUpwardIcon fontSize="inherit" />
      </IconButton>
      <div className={styles.loadMoreButton}>
        <Button onClick={loadMorePokemons} size="large" color="success">
          Load more
        </Button>
      </div>
    </div>
  );
};

export default Home;
