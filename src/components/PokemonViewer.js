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
    
    // set the pokemons id, image, name, and species-link
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

      let evolutionChainIDs = []; // ids of all pokemon in evolution chain (will get below)

      // get the pokemons evolution info based on the species link from above
      await PokedexAPI.getEvolutionInfo(this.state.selectedPokemonInfo)
      .then(response => {
        const evolutionNames = []; // names of all pokemon in evolution chain
        const evolutionURLs = []; // links of all pokemon in evolution chain
        
        let evoChain = response.data.chain
        
        do{
          evolutionNames.push(evoChain.species.name);
          evolutionURLs.push(evoChain.species.url);
          evoChain = evoChain['evolves_to'][0];
        }
        while(evoChain && evoChain.hasOwnProperty('evolves_to'))

        this.setState({
          selectedPokemonEvolutionChainNames: evolutionNames,
      })
      evolutionChainIDs = evolutionURLs
    })
      .catch(error => console.log(error));

      // get the evolution chain ids from the ends of the urls
      evolutionChainIDs = evolutionChainIDs.map(url => {
        let res = url.split("/")
        let pokeID = res[6];
        return pokeID;
      })
      
      await evolutionChainIDs.sort(); // sort so the pictures would be in order
     
      // set the pictures of the pokemon in the evolution chain
      let evolutionChainImgURLs = evolutionChainIDs.map(id => {
        let res = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
        return res;
      })

      this.setState({selectedPokemonEvolutionChainImgURLs: evolutionChainImgURLs});

  }

  async componentWillReceiveProps (newProps){
    if(newProps.selectedPokemonID !== this.state.selectedPokemonID){
      await this.setState({isLoading: true})

      await this.setSelectedPokemonState(newProps.selectedPokemonID)

      setTimeout(() => {
        this.setState({isLoading:false});
      },900);

    }

  }

  async componentDidMount () {
    await this.setSelectedPokemonState(this.props.selectedPokemonID)
     }
  
  render (){
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