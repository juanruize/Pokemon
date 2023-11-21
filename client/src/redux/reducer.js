import {GET_ALL_POKEMONS, GET_ALL_TYPES, LOAD_POKEMON,  SET_FILTER_BY_TYPE, SET_FILTER_BY_ORIGIN, ORDER} from "./action-types"

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

        
        
        case SET_FILTER_BY_TYPE:
               
        const filteredType = action.payload === 'ALL' 
        ? state.allPokemons 
        : state.allPokemons.filter(poke => poke.types.includes(action.payload));
      
        return {
            ...state,
            pokemons: filteredType
        }
        
        

       
        
        


        
        case SET_FILTER_BY_ORIGIN:
         
        const origin = action.payload === 'DB' ? state.pokemonsDB : action.payload === 'API' ? state.pokemonsApi : action.payload === 'ALL' && state.allPokemons
            return {
                ...state,
                pokemons: origin
            }
        
      
        
        
        
              case ORDER:
                const pokemon = action.payload === 'A-Z' ?
                    state.pokemons.slice().sort((a, b) => a.name.localeCompare(b.name)) :
                    action.payload === 'Z-A' ?
                        state.pokemons.slice().sort((a, b) => b.name.localeCompare(a.name)) :
                        action.payload === "ATQ-ASC" ? state.pokemons.slice().sort((a, b) => a.attack - b.attack) :
                            action.payload === "ATQ-DESC" ? state.pokemons.slice().sort((a, b) => b.attack - a.attack) :
                                state.pokemons
    
                return {
                    ...state,
                    pokemons: pokemon
                }
        
        
    
        default:
            return {
                ...state
            }
    }


}

export default reducer