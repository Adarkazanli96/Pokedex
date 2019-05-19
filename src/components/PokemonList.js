import React from 'react'
import PokemonCell from './PokemonCell'
import './PokemonList.less'

let PokemonList = props =>{
        let pokeList = props.pokemonlist.map((pokemon, index) =>{
        return <PokemonCell
                onClick = {props.onClick}
                name = {pokemon.name}
                url = {pokemon.url}
                key = {index}
                id = {index}
                />
        }
        )
        
        return(
        <div className = "pokelist"
        style={{transform: `translateY(${props.translate}px)`}}>
                {pokeList}
        </div>
        );
}

export default PokemonList;