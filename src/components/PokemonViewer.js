import React from 'react';
import { PokedexAPI } from '../api'
import './PokemonViewer.less';

class PokemonViewer extends React.Component{
  constructor(props) {
    console.log("child: constructor")
    super(props);

    this.state = {
      selectedPokemonID: 0,
      selectedPokemonName: "",
      selectedPokemonImageURL: ""
    };
  }

  // called when setState is called
  componentWillUpdate(newProps, nextState){
    console.log("child: component will update")
  }

  componentWillReceiveProps (newProps){
    console.log("child: component will receive props")
    if(newProps.selectedPokemonID !== this.state.selectedPokemonID){
      this.setState({selectedPokemonID : newProps.selectedPokemonID})
      PokedexAPI.getPokemon(newProps.selectedPokemonID)
      .then(response => {
        const imageURL = response.data.sprites.front_default;
        const name = response.data.name;
        this.setState({
          selectedPokemonImageURL: imageURL,
          selectedPokemonName: name
        });   
      })
      .catch(error => console.log(error));
    }
  }

  // grab the first pokemon and set the state of all the properties
  componentDidMount () {
    console.log("child: component did mount")
    PokedexAPI.getPokemon(this.props.selectedPokemonID)
    .then(response => {
        const imageURL = response.data.sprites.front_default;
        const name = response.data.name;
        this.setState({
          selectedPokemonImageURL: imageURL,
          selectedPokemonName: name
      }); 
      })
      .catch(error => console.log(error));
  }
  
  render (){
    console.log("child: in render")
    return (
      <div className="selected-pokemon">
        <p className = "name">{this.state.selectedPokemonName.toUpperCase()}</p>
        <img className = "poke-img"
        src = {this.state.selectedPokemonImageURL}
        alt = "new" />
      </div>
      
    );
  }
}

export default PokemonViewer;