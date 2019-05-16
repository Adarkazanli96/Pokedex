import React from 'react';
import { PokedexAPI } from '../api'
import PokemonList from './PokemonList';
import PokemonViewer from './PokemonViewer';
//import {Arrow, Textbox} from '../shared'
import './Pokedex.less';

class Pokedex extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      pokemonlist: [],
      selectedPokemonID: 1,
      number: 1
    };

    this.setSelectedPokemonHandler = this.setSelectedPokemonHandler.bind(this);
  }

   setSelectedPokemonHandler (value) {
      this.setState({selectedPokemonID: value});
  }

  componentDidMount () {
  
    PokedexAPI.getAllPokemon()
    .then(response => {
    
        // create an array of pokemon only with relevant data
        const newPokemonlist = response.data.results.map(p => {
          return {
            name: p.name,
            url: p.url
          };
        });

        // set the state of the pokemon array to the data retrieved
        this.setState({pokemonlist: newPokemonlist});
        
      })
      .catch(error => console.log(error));
    
  }
  
  render (){
    console.log(this.state.selectedPokemonID);
    return (
      <div className = "pokedex">
        <span className = "pokelist">
          <PokemonList
            pokemonlist = {this.state.pokemonlist}
            onClick = {this.setSelectedPokemonHandler}/>
        </span>
        <span className = "viewport">
          <PokemonViewer
            selectedPokemonID = {this.state.selectedPokemonID}/>
        </span>
        
      </div>
    );
  }
}

export default Pokedex;
