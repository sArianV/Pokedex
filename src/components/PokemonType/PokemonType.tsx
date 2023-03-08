import { Typography } from "@mui/material";
import { POKEMON_TYPES, TPokemonType } from "../../constants/pokemonTypes";

const PokemonType = ({ type }: { type: TPokemonType }) => {
  return (
    <div
      style={{
        backgroundColor: POKEMON_TYPES[type].color,
        color: POKEMON_TYPES[type].fontColor,
        padding: "0.1rem 0.3rem",
        borderRadius: "5px",
      }}
    >
      <Typography variant="caption">{type}</Typography>
    </div>
  );
};

export default PokemonType;
