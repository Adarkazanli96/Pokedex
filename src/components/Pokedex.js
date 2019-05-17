import React from 'react';
import { PokedexAPI } from '../api'
import PokemonList from './PokemonList';
import PokemonViewer from './PokemonViewer';
import Controls from './Controls'
//import {Arrow, Textbox} from '../shared'
//import FadeIn from 'react-fade-in';
import './Pokedex.less';
import Loader from './Loader'

class Pokedex extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      pokemonlist: [],
      offset: 0,
      selectedPokemonID: 1, // pokemon we want selected when first rendered
      isLoading : false
    };

    this.setSelectedPokemonHandler = this.setSelectedPokemonHandler.bind(this);
    this.setPokemonListDisplayedHandler = this.setPokemonListDisplayedHandler.bind(this);
  }

   setSelectedPokemonHandler (value) {
      this.setState({selectedPokemonID: value});
  }

  // add or subtract from the value of the offset
  async setPokemonListDisplayedHandler (value) {
    if((this.state.offset + value) >= 0){
      await this.setState({offset: this.state.offset + value,
      isLoading: true});
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
          pokemonlist: newPokemonlist,
          isLoading: false
        });
        
      })
      .catch(error => console.log(error));
    
  }
  

  componentDidMount () {
  
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
  
  render (){
    console.log(this.state.pokemonlist);
    console.log(this.state.selectedPokemonID);
    console.log(this.state.offset);

    /* let show = <Loader/>;

    if(!this.state.isLoading){
      show = <PokemonList
      pokemonlist = {this.state.pokemonlist}
      onClick = {this.setSelectedPokemonHandler}
      />
    } */
    
    return (
      <div className = "pokedex">
        <span className = "left">
          <span className = "pokelist">

            <PokemonList
      pokemonlist = {this.state.pokemonlist}
      onClick = {this.setSelectedPokemonHandler}
      />

          </span>
          <span>
            <Controls
            onClick = {this.setPokemonListDisplayedHandler}/>
          </span>
        </span>
        
        <span className = "pokemonview">
          <PokemonViewer
            selectedPokemonID = {this.state.selectedPokemonID}/>
        </span>
        
      </div>
    );
  }
}

export default Pokedex;
