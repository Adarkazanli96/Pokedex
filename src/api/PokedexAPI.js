import axios from 'axios'

export function getPokemons(){
    axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';
    return axios.get('');
}