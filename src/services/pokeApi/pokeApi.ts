import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const pokeApi = axios.create({
  baseURL: publicRuntimeConfig.pokeApiUrl,
});
