import React from 'react';
import { PokedexAPI } from '../api'
import './PokemonViewer.less';

class PokemonViewer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedPokemonID: 0,
      selectedPokemonImageURL: ""
    };
  }

  componentWillUpdate(newProps, nextState){
    PokedexAPI.getPokemon(newProps.selectedPokemonID)
    .then(response => {
        const imageURL = response.data.sprites.front_default;
        this.setState({selectedPokemonImageURL: imageURL});   
      })
      .catch(error => console.log(error));
  }

  componentWillReceiveProps (newProps){
    if(newProps.selectedPokemonID !== this.state.selectedPokemonID){
      this.setState({selectedPokemonID : newProps.selectedPokemonID})
    }
  }

  // grab the first pokemon and set the state of all the properties
  componentDidMount () {
    PokedexAPI.getPokemon(1)
    .then(response => {
        const imageURL = response.data.sprites.front_default;
        this.setState({selectedPokemonImageURL: imageURL});   
      })
      .catch(error => console.log(error));
  }
  
  render (){
    return (
      <img className = "selected-pokemon"
        src = {this.state.selectedPokemonImageURL}
        alt = "new" />
    );
  }
}

export default PokemonViewer;