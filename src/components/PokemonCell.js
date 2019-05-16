import React from 'react';

let PokemonCell = props =>{
    
    let pokeID = props.id + 1;

    return(
    <div>
        <img
            onClick={() => props.onClick(pokeID)}
            src = {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID + ".png"}
            alt = "new"/>
    </div>
    );

}

export default PokemonCell;