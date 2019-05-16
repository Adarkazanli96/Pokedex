import axios from 'axios'

//axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';

function getListOfPokemon(offset){
    return axios.get("https://pokeapi.co/api/v2/pokemon/?limit=8&offset=" + offset);
}

function getPokemon(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
}


export default {
    getListOfPokemon,
    getPokemon
}