import axios from 'axios';
import {
    FETCH_POKEMONS, FETCH_POKEMON_BY_ID
} from '../actions/types';

const config = require('../config.json');
const serverUrl = `${config.serverUrl}`;

export const fetchPokemons = () => dispatch => {
    axios.get(`${serverUrl}/pokemon?offset=0&limit=20`)
    .then(response => {
        Promise.all(
            response.data.results.map(poke => {
                return new Promise((resolve, reject) => {
                    axios.get(poke.url)
                    .then(pokeResp => {
                        resolve(pokeResp.data);
                    })
                    .catch(err => {
                        reject(err)
                    })
                })
            })
        ).then(finalResp => {
            dispatch({
                type: FETCH_POKEMONS,
                nextUrl: response.data.next,
                payload: finalResp
            })
        }).catch(error => {
            console.log("Error occured", error);
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const fetchPokemonById = (id) => dispatch => {
    axios.get(`${serverUrl}/pokemon/${id}`)
    .then(response => {
        dispatch({
            type: FETCH_POKEMON_BY_ID,
            payload: response.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}
