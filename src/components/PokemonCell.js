import React from 'react';

let PokemonCell = props =>{
    // get the pokemons number
    let res = props.url.split("/");
    let number = res[6];

    return(<div onClick={() => props.onClick(props.id)}>
        <img
            
            src = {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"}
            alt = "new"/>
        {props.name}
    </div>
    );

}

export default PokemonCell;