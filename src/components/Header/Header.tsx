"use client";

import SearchBar from "@components/TextInput/TextInput";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

import { useAtom } from "jotai";
import { PokedexInput } from "@atoms/pokemon";

const Header = () => {
  const [input, setInput] = useAtom(PokedexInput);

  return (
    <div style={styles.root}>
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
    </div>
  );
};

export default Header;

const styles = {
  root: {
    backgroundColor: "#424242",
    width: "100%",
  },
  header: {
    padding: "2rem 0 2rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "space-around",
    flexWrap: "wrap",
    rowGap: "1rem",
  },
};
