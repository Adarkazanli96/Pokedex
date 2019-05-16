import axios from 'axios'

//axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';

export function getAllPokemon(){
    return axios.get('https://pokeapi.co/api/v2/pokemon');
}

