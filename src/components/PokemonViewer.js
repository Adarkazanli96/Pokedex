import React from 'react';
import { PokedexAPI } from '../api'
import Evolutions from './Evolutions'
import './PokemonViewer.less';

class PokemonViewer extends React.Component{
  constructor(props) {
    console.log("child: constructor")
    super(props);

    this.state = {
      selectedPokemonID: 0,
      selectedPokemonName: "",
      selectedPokemonImageURL: "",
      selectedPokemonInfo: "",
      evolutionLink: "",
      selectedPokemonEvolutionChain: [],
      isLoading: false
    };
  }

  // called when setState is called
  componentWillUpdate(newProps, nextState){
    console.log("child: component will update")
  }

  async componentWillReceiveProps (newProps){
    console.log("child: component will receive props")
    if(newProps.selectedPokemonID !== this.state.selectedPokemonID){
      await this.setState({isLoading: true})

      
      console.log(newProps.selectedPokemonID);
      await this.setState({selectedPokemonID : newProps.selectedPokemonID})
      
      await PokedexAPI.getPokemon(newProps.selectedPokemonID)
      .then(response => {
        const imageURL = response.data.sprites.front_default;
        const name = response.data.name;
        const pokemonInfo = response.data.species.url;
        this.setState({
          selectedPokemonImageURL: imageURL,
          selectedPokemonName: name,
          selectedPokemonInfo: pokemonInfo
        });   
      })
      .catch(error => console.log(error));

      PokedexAPI.getEvolutionInfo(this.state.selectedPokemonInfo)
      .then(response => {
        const evolutions = [];
        
        let evoChain = response.data.chain
        
        do{
          evolutions.push(evoChain.species.name);
          evoChain = evoChain['evolves_to'][0];
        }
        while(evoChain && evoChain.hasOwnProperty('evolves_to'))

        this.setState({
          selectedPokemonEvolutionChain: evolutions,
          isLoading: false
      })
    })
      .catch(error => console.log(error));

    }

  }

  // grab the first pokemon and set the state of all the properties
  async componentDidMount () {
    console.log("child: component did mount")
    await PokedexAPI.getPokemon(this.props.selectedPokemonID)
    .then(response => {
        const imageURL = response.data.sprites.front_default;
        const name = response.data.name;
        const pokemonInfo = response.data.species.url
        this.setState({
          selectedPokemonImageURL: imageURL,
          selectedPokemonName: name,
          selectedPokemonInfo: pokemonInfo
      }); 
      })
      .catch(error => console.log(error));

      PokedexAPI.getEvolutionInfo(this.state.selectedPokemonInfo)
      .then(response => {
        const evolutions = [];
        
        let evoChain = response.data.chain
        
        do{
          evolutions.push(evoChain.species.name);
          evoChain = evoChain['evolves_to'][0];
        }
        while(evoChain && evoChain.hasOwnProperty('evolves_to'))

        this.setState({
          selectedPokemonEvolutionChain: evolutions
      })
    })
      .catch(error => console.log(error));

    }
  
  render (){
    console.log("child: in render")
    return (<div>
      {this.state.isLoading? <div>is loading</div> :

    <div className="selected-pokemon">
      <p className = "name">{this.state.selectedPokemonName.toUpperCase()}</p>
      <img className = "poke-img"
      src = {this.state.selectedPokemonImageURL}
      alt = "new" />
      <Evolutions evolutionchain = {this.state.selectedPokemonEvolutionChain}/>
    </div>
    
    }

</div>
      
    );
  }
}

export default PokemonViewer;