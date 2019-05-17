import React from 'react';
import './PokemonCell.less'

let PokemonCell = props =>{
    let res = props.url.split("/")
    let pokeID = res[6];

    return(
    <div className = "cell">
        <img
            onClick={() => props.onClick(pokeID)}
            src = {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID + ".png"}
            alt = "new"/>
    </div>
    );

}

export default PokemonCell;