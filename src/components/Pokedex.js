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
      selectedPokemonID: 1,
      translate: 0,
    };

    this.updateSelectedPokemonHandler = this.updateSelectedPokemonHandler.bind(this);
    this.updatePokemonListDisplayedHandler = this.updatePokemonListDisplayedHandler.bind(this);
  }

   updateSelectedPokemonHandler (value) {
      this.setState({selectedPokemonID: value});
  }

  // add or subtract from the value of the offset
  updatePokemonListDisplayedHandler (value) {
    if(this.state.translate + value <= 0 && this.state.translate + value >= -5760){
      this.setState({
       translate: this.state.translate + value
     })
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

        this.setState({allPokemon: allPokemon});
        
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
            <span className = "pokelist-container">
              <PokemonList
              translate={this.state.translate}
              pokemonlist = {this.state.allPokemon}
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
