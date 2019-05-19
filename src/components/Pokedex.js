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
      allPokemon: [],
      pokemonlist: [],
      start: 0,
      end: 8,
      selectedPokemonID: 1,
    };

    this.updateSelectedPokemonHandler = this.updateSelectedPokemonHandler.bind(this);
    this.updatePokemonListDisplayedHandler = this.updatePokemonListDisplayedHandler.bind(this);
  }

   updateSelectedPokemonHandler (value) {
      this.setState({selectedPokemonID: value});
  }

  // add or subtract from the value of the offset
  async updatePokemonListDisplayedHandler (value) {
    if((this.state.end + value) >= 8 && (this.state.end + value) < 160){
        await this.setState({
          start: this.state.start+value,
          end: this.state.end+value
        })
        
        const pokemonlist = this.state.allPokemon.slice(this.state.start, this.state.end);
        this.setState({pokemonlist : pokemonlist});
    }
  }
  

  componentDidMount () {
    console.log('in component did mount')
  
    PokedexAPI.getAllPokemon()
    .then(response => {
    
        // create an array of pokemon only with relevant data
        const allPokemon = response.data.results.map(p => {
          return {
            name: p.name,
            url: p.url
          };
        });

        const pokemonlist = allPokemon.slice(0,8);

        // set the state of the pokemon array to the data retrieved
        this.setState({allPokemon: allPokemon,
        pokemonlist: pokemonlist});
        
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
        <div className = "pokedex-header">
          <div className = "bluedot"/>
          <div className = "mini-dots"><div className = "red dot"/><div className = "yellow dot"/><div className = "green dot"/></div>
        </div>
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
              onClick = {this.updatePokemonListDisplayedHandler}/>
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
