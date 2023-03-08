import { TPokemon, TPokdex } from '@controllers/types'
import { atom } from 'jotai'

export const PokedexAtom = atom<TPokdex>([])
export const PokedexInput =atom<string>('')
export const PokedexLenght = atom<number>(8)

export const PokemonSearchAtom = atom((get) => {
    const pokedex = get(PokedexAtom) as TPokdex
    const input = get(PokedexInput)
    const lenght = get(PokedexLenght)

    if (!pokedex) return []
    if ( input === "" ) return pokedex.slice(0, lenght)

    
    return null
})
