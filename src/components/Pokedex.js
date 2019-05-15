import React from 'react';
import { getPokemons } from '../api/PokedexAPI'
import PokemonList from './PokemonList/PokemonList';

class Pokedex extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    getPokemons()
    .then(response => {
    
        // create an array of pokemon only with relevant data
        const newPokemons = response.data.results.map(p => {
          return {
            name: p.name,
            url: p.url
          };
        });

        // set the state of the pokemon array to the data retrieved
        this.setState({pokemons: newPokemons});

        console.log("Success!");
      })
      .catch(error => console.log(error));
    
  }
  
  render (){
    return (
      <div>
        <PokemonList pokemons = {this.state.pokemons}/>
      </div>
    );
  }
}

export default Pokedex;
