

const initialState = {
    pokemons: [],
    pokeById: [],
    pokeFilter: []
}; 

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_POKEMONS':
            return {...state, pokemons: action.payload}

        case 'POKEMON_BY_ID': 
        return {
            ...state,
            pokeById: action.payload,
        }; 

        case 'GET_NAME':
            return {
                ...state,
                pokeFilter: action.payload,
            }

       
        // case "FILTER_POKEMONS_BY_TYPE":
        //     const filterPokemons = state.pokemons.filter((pokemon) => pokemon.type === action.payload);
        //     return {...state, pokemons: filterPokemons}


        default:
            return {...state}; 
    }
}


export default rootReducer; 