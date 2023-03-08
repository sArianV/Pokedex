import { TPokemon, TPokemonList } from '@controllers/types'
import { atom } from 'jotai'

export const PokemonAtom = atom<TPokemonList | TPokemon | null>(null)

export const PokemonSearchAtom = atom((get) => {
    const content = get(PokemonAtom) as TPokemon
    if (content?.id) return content
    return null
})

export const PokemonListAtom = atom((get) => {
    const content = get(PokemonAtom) as TPokemonList
    if (content?.length) return content
    return null
})