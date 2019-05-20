import axios from 'axios'

//axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';

function getAllPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
}

function getPokemon(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
}

async function getEvolutionInfo(url){
    let evolutionLink;
    await axios.get(url)
    .then(response => {
        evolutionLink = response.data.evolution_chain.url;
    })
    .catch(error => console.log(error));

    return axios.get(evolutionLink);
}

function getEvolutionChain(id){
    return axios.get("https://pokeapi.co/api/v2/evolution-chain/" + id);
}

export default {
    getAllPokemon,
    getPokemon,
    getEvolutionChain,
    getEvolutionInfo
}