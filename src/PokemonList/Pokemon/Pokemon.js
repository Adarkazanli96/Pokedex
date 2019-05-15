import React from 'react';

let Pokemon = props =>{
    // get the pokemons number
    let res = props.url.split("/");
    let number = res[6];

    return(<div>
        <img
        src = {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"}
        alt = "new"/>
        
    </div>
    );

}

export default Pokemon;