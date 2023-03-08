"use client";

import { useState } from "react";
import SearchBar from "@components/TextInput/TextInput";
import useFetchPokemon from "./hooks/useFetchPokemon";
import { Container } from "@mui/system";
import { InputAdornment, Typography } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const Header = () => {
  const [input, setInput] = useState("");
  const { loading } = useFetchPokemon(input);

  return (
    <Container maxWidth="lg" sx={styles.header}>
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom>
          Name or Number
        </Typography>
        <SearchBar
          input={input}
          setInput={setInput}
          debounceTime={2000}
          fullWidth
          InputProps={
            loading
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <TailSpin
                        color="#4dad5b"
                        height="1.5rem"
                        width="1.5rem"
                        ariaLabel="tail-spin-loading"
                        visible={true}
                      />
                    </InputAdornment>
                  ),
                }
              : {}
          }
        />
      </Container>
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: "#4dad5b",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Search for a Pokémon by name or using its National Pokédex number.
        </Typography>
      </Container>
    </Container>
  );
};

export default Header;

const styles = {
  header: {
    padding: "2rem 0 2rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "space-around",
    flexWrap: "wrap",
    rowGap: "1rem",
  },
};
