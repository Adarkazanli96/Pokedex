import React from 'react';
import { PokedexAPI } from '../api'
import './PokemonViewer.less';

class PokemonViewer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedPokemonID: 1,
      selectedPokemonImageURL: ""
    };
  }

  componentWillUpdate(nextProps, nextState){
    PokedexAPI.getPokemon(nextProps.selectedPokemonID)
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

  componentDidMount () {
    PokedexAPI.getPokemon(this.state.selectedPokemonID)
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