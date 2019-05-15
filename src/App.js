import React from 'react';
import './App.less';
import axios from 'axios';
import PokemonList from './PokemonList/PokemonList';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        
        // create an array of pokemon only with relevant data
        const newPokemons = response.data.results.map(p => {
          return {
            name: p.name,
            url: p.url
          };
        });

        // set the state of the pokemon array to the data retrieved
        this.setState({pokemons: newPokemons});

        console.log("Success!");
      })
      .catch(error => console.log(error));
    
  }
  
  render (){
    console.log('In Render');
    console.log(this.state.pokemons);
    return (
      <div className="App">
        <PokemonList pokemons = {this.state.pokemons}/>
      </div>
    );
  }
}

export default App;
