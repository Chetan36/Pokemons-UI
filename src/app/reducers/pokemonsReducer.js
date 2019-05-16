import {
    FETCH_POKEMONS, FETCH_POKEMON_BY_ID
} from '../actions/types'; 

const initialState = {
    pokemonList: [],
    nextApi: '',
    pokemon: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                nextApi: action.nextUrl,
                pokemonList: action.payload
            }
        case FETCH_POKEMON_BY_ID:
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state;
    }
}
