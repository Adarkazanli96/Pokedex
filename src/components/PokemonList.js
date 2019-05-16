import React from 'react'
import PokemonCell from './PokemonCell'

let PokemonList = props =>{
        console.log(props.pokemonlist);
    return props.pokemonlist.map((pokemon, index) =>{
        return <PokemonCell
                onClick = {props.onClick}
                name = {pokemon.name}
                url = {pokemon.url}
                key = {index}
                id = {index}
                />
    }
    )
}

export default PokemonList;