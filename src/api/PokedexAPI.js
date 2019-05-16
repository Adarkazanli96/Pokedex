import axios from 'axios'

//axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';

function getAllPokemon(){
    return axios.get('https://pokeapi.co/api/v2/pokemon');
}

function getPokemon(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
}


export default {
    getAllPokemon,
    getPokemon
}