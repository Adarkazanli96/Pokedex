import React from 'react';

let Pokemon = props =>{
    // get the pokemons number
    let res = props.url.split("/");
    let pokeID = res[6];

    return(<div>
        <img
        src = {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID + ".png"}
        alt = "new"/>
        {props.name}
    </div>
    );

}

export default Pokemon;