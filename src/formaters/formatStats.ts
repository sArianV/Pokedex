import { TRawStats } from "@controllers/types";
import { TPokemonStats } from "./types";

const formatStats = (stats: TRawStats): TPokemonStats => {
  return {
    hp: stats?.find(({ stat }) => stat.name === "hp")?.base_stat,
    attack: stats?.find(({ stat }) => stat.name === "attack")?.base_stat,
    defense: stats?.find(({ stat }) => stat.name === "defense")?.base_stat,
    specialAttack: stats?.find(({ stat }) => stat.name === "special-attack")
      ?.base_stat,
    specialDefense: stats?.find(({ stat }) => stat.name === "special-defense")
      ?.base_stat,
    speed: stats?.find(({ stat }) => stat.name === "speed")?.base_stat,
  };
};

export default formatStats;
