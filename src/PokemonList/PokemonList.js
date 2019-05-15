import React from 'react'
import Pokemon from './Pokemon/Pokemon'

let PokemonList = props =>{
    return props.pokemons.map((pokemon, index) =>{
        return <Pokemon
                name = {pokemon.name}
                url = {pokemon.url}
                />
    }
    )
}

export default PokemonList;