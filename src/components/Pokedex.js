import React from 'react';
import { PokedexAPI } from '../api'
import PokemonList from './PokemonList';
import PokemonViewer from './PokemonViewer';
import Controls from './Controls'

import './Pokedex.less';

class Pokedex extends React.Component{
  constructor(props) {
    console.log('in constructor');
    super(props);

    this.state = {
      pokemonlist: [],
      offset: 0,
      selectedPokemonID: 1,
    };

    this.updateSelectedPokemonHandler = this.updateSelectedPokemonHandler.bind(this);
    this.setPokemonListDisplayedHandler = this.setPokemonListDisplayedHandler.bind(this);
  }

   updateSelectedPokemonHandler (value) {
      this.setState({selectedPokemonID: value});
  }

  // add or subtract from the value of the offset
  async setPokemonListDisplayedHandler (value) {
    if((this.state.offset + value) >= 0){
      await this.setState({offset: this.state.offset + value});
      this.updatePokemonList();
    }
  }

  // method for updating the pokemon list
  updatePokemonList = () =>{
    PokedexAPI.getListOfPokemon(this.state.offset)
    .then(response => {
    
        // create an array of pokemon only with relevant data
        const newPokemonlist = response.data.results.map(p => {
          return {
            name: p.name,
            url: p.url
          };
        });

        // set the state of the pokemon array to the data retrieved
        this.setState({
          pokemonlist: newPokemonlist
        });
        
      })
      .catch(error => console.log(error));
    
  }
  

  componentDidMount () {
    console.log('in component did mount')
  
    PokedexAPI.getListOfPokemon(0)
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

  componentDidUpdate(){
    console.log('component did update')
  }
  
  render (){
    console.log('in render')

    return (
      <div className = "pokedex">
        <div className = "pokedex-header"><div className = "bluedot"></div></div>
        <div className = "pokedex-body">
          <span className = "left-side">
            <span className = "pokelist">
              <PokemonList
              pokemonlist = {this.state.pokemonlist}
              onClick = {this.updateSelectedPokemonHandler}
              />
            </span>
            <span>
              <Controls
              onClick = {this.setPokemonListDisplayedHandler}/>
            </span>
          </span>
          <span className = "right-side">
            <PokemonViewer
            selectedPokemonID = {this.state.selectedPokemonID}/>
          </span>
        </div>
      </div>
        
    );
  }
}

export default Pokedex;
