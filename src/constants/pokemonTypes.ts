export const POKEMON_TYPES: Record<string, {
    name: string;
    color: string;
    fontColor: string;
}> = {
  bug: {
    name: "bug",
    color: "#729f3f",
    fontColor: "#fff",
  },
  dark: {
    name: "dark",
    color: "#707070",
    fontColor: "#fff",
  },
  dragon: {
    name: "dragon",
    color: "#53a4cf",
    fontColor: "#fff",
  },
  electric: {
    name: "electric",
    color: "#eed535",
    fontColor: "#fff",
  },
  fairy: {
    name: "fairy",
    color: "#fdb9e9",
    fontColor: "#fff",
  },
  fighting: {
    name: "fighting",
    color: "#d56723",
    fontColor: "#fff",
  },
  fire: {
    name: "fire",
    color: "#fd7d24",
    fontColor: "#fff",
  },
  flying: {
    name: "flying",
    color: "#3dc7ef",
    fontColor: "#fff",
  },
  ghost: {
    name: "ghost",
    color: "#7b62a3",
    fontColor: "#fff",
  },
  grass: {
    name: "grass",
    color: "#9bcc50",
    fontColor: "#fff",
  },
  ground: {
    name: "ground",
    color: "#ab9842",
    fontColor: "#fff",
  },
  ice: {
    name: "ice",
    color: "#51c4e7",
    fontColor: "#fff",
  },
  normal: {
    name: "normal",
    color: "#a4acaf",
    fontColor: "#fff",
  },
  poison: {
    name: "poison",
    color: "#b97fc9",
    fontColor: "#fff",
  },
  psychic: {
    name: "psychic",
    color: "#f366b9",
    fontColor: "#fff",
  },
  rock: {
    name: "rock",
    color: "#a38c21",
    fontColor: "#fff",
  },
  steel: {
    name: "steel",
    color: "#9eb7b8",
    fontColor: "#fff",
  },
  water: {
    name: "water",

    color: "#4592c4",
    fontColor: "#fff",
  },
};

export type TPokemonType = keyof typeof POKEMON_TYPES;