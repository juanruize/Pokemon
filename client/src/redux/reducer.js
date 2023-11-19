import {GET_ALL_POKEMONS, GET_ALL_TYPES, LOAD_POKEMON} from "./action-types"

const initialState ={
    allPokemons: [],
    pokemons: [], //para modificar en cada case
    pokemonsDB: [],
    pokemonsApi: [],
    pokemonDetail: [],
    allTypes: [],
    
}

const reducer = (state= initialState, action ) => {
    switch (action.type) {
         case GET_ALL_POKEMONS:
            const apiPokemons = action.payload.filter((pokemon) => !isNaN(pokemon.id));
            const dbPokemons = action.payload.filter((pokemon) => isNaN(pokemon.id));
        return {
                ...state,
                allPokemons: action.payload, 
                pokemons: action.payload,
                pokemonsApi: apiPokemons, 
                pokemonsDB: dbPokemons, 
              };
        case LOAD_POKEMON:
        return {
                    ...state,
                    pokemonDetail: action.payload
                }
        case GET_ALL_TYPES:
                return{
                    ...state,
                    allTypes: action.payload
                }
            
        
    
        default:
            return {
                ...state
            }
    }

}

export default reducer