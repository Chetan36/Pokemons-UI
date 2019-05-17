import {
    FETCH_POKEMONS, FETCH_POKEMON_BY_ID,
    ADD_POKEMON_TO_COMPARISION, ADD_POKEMON_TO_BAGPACK
} from '../actions/types'; 

const initialState = {
    pokemonList: [],
    nextApi: '',
    pokemon: {},
    pokemonsInComparision: [],
    pokemonsInBagpack: []
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
        case ADD_POKEMON_TO_COMPARISION:
            var compareList = state.pokemonsInComparision;
            if (compareList.length === 2) {
                compareList.splice(0, 1);
            }
            compareList.push(action.payload);
            return {
                ...state,
                pokemonsInComparision: compareList
            }
        case ADD_POKEMON_TO_BAGPACK:
            var bagpack = state.pokemonsInBagpack;
            bagpack.push(action.payload);
            var pokemonList = state.pokemonList;
            pokemonList[pokemonList.findIndex(x => x.name === action.payload.name )] = action.payload;
            console.log(pokemonList);
            return {
                ...state,
                pokemonList: pokemonList,
                pokemonsInBagpack: bagpack
            }
        default:
            return state;
    }
}
