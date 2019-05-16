import React from 'react'
import PokemonCell from './PokemonCell'

let PokemonList = props =>{
    return props.pokemons.map((pokemon, index) =>{
        return <PokemonCell
                name = {pokemon.name}
                url = {pokemon.url}
                />
    }
    )
}

export default PokemonList;