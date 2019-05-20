import React from 'react';
import { PokedexAPI } from '../api'
import Evolutions from './Evolutions'
import './PokemonViewer.less';

class PokemonViewer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedPokemonID: 1,
      selectedPokemonName: "",
      selectedPokemonImageURL: "",
      selectedPokemonInfo: "",
      selectedPokemonEvolutionChainNames: [],
      selectedPokemonEvolutionChainImgURLs: [],
      isLoading: false
    };
  }

  setSelectedPokemonState = async (PokemonID) =>{
    await PokedexAPI.getPokemon(PokemonID)
    .then(response => {
        const imageURL = response.data.sprites.front_default;
        const name = response.data.name;
        const pokemonInfo = response.data.species.url
        this.setState({
          selectedPokemonID: PokemonID,
          selectedPokemonImageURL: imageURL,
          selectedPokemonName: name,
          selectedPokemonInfo: pokemonInfo
      }); 
      })
      .catch(error => console.log(error));

      PokedexAPI.getEvolutionInfo(this.state.selectedPokemonInfo)
      .then(response => {
        const evolutionNames = [];
        const evolutionURLs = [];
        
        let evoChain = response.data.chain
        
        do{
          evolutionNames.push(evoChain.species.name);
          evolutionURLs.push(evoChain.species.url);
          evoChain = evoChain['evolves_to'][0];
        }
        while(evoChain && evoChain.hasOwnProperty('evolves_to'))

        // did not get the urls for the evolution chain
        this.setState({
          selectedPokemonEvolutionChainNames: evolutionNames,
          selectedPokemonEvolutionChainImgURLs: evolutionURLs
      })
    })
      .catch(error => console.log(error));
  }

  async componentWillReceiveProps (newProps){
    console.log("child: component will receive props")
    if(newProps.selectedPokemonID !== this.state.selectedPokemonID){
      await this.setState({isLoading: true})

      await this.setSelectedPokemonState(newProps.selectedPokemonID)

      setTimeout(() => {
        this.setState({isLoading:false});
      },1000);

    }

  }

  componentDidMount () {
    this.setSelectedPokemonState(this.props.selectedPokemonID)
  }
  
  render (){
    console.log("child: in render")
    return (<div>
      {this.state.isLoading? <div className = "loader">is loading</div> :

    <div className="selected-pokemon">
      <p className = "name">{this.state.selectedPokemonName.toUpperCase()}</p>
      <img className = "poke-img"
      src = {this.state.selectedPokemonImageURL}
      alt = "new" />
      <Evolutions evolutionChainNames = {this.state.selectedPokemonEvolutionChainNames}
      evolutionChainImgURLs = {this.state.selectedPokemonEvolutionChainImgURLs}/>
    </div>
    
    }

</div>
      
    );
  }
}

export default PokemonViewer;