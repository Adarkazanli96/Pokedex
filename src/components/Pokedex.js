import React from 'react';
import { getAllPokemon } from '../api/PokedexAPI'
import PokemonList from './PokemonList';
import './Pokedex.less';

class Pokedex extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    getAllPokemon()
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
        
      })
      .catch(error => console.log(error));
    
  }
  
  render (){
    return (
      <div className = "gallery">
        <PokemonList pokemons = {this.state.pokemons}/>
      </div>
    );
  }
}

export default Pokedex;
