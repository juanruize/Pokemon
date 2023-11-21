import axios from "axios";

import { 
    GET_ALL_POKEMONS,
    LOAD_POKEMON,
    SET_FILTER_BY_ORIGIN,
    SET_FILTER_BY_TYPE, 
    GET_ALL_TYPES,
    ORDER
   } from "./action-types";

const endPoint = "http://localhost:3001"

export const getPokemons = () => {
    return async (dispatch) =>{ 
      try {
        const {data} = await axios.get(`${endPoint}/pokemons`);
        return dispatch ({
        type: GET_ALL_POKEMONS,
        payload: data
      });
        
      } catch (error) {
        throw new Error ('SERVER ERROR')
      }
    }
  };

  export const loadPokemon = (name) => {

    return async (dispatch) => { 
      if(name==="clean"){
        return dispatch({
          type: LOAD_POKEMON,
          payload:"",
        })
      }
      try {
        const { data } = await axios.get(`${endPoint}/pokemons/pokemon/?name=${name}`); 
  
        dispatch({ 
          type: LOAD_POKEMON,
          payload: data,
        });
      } catch (error) { 
          return alert(`POKEMON DOES'T EXIST`);
      }
    };
  };

  export const allTypes = ()=>{

    return async (dispatch) =>{
      try {
        const {data} = await axios(`${endPoint}/types`)
        return dispatch ({
          type: GET_ALL_TYPES,
          payload: data
        })
      }
        catch (error){
          return alert(`ERROR SERVER`);
        
      }
    }

  }
  
  export const setFilterByType = (types)=>{
    return{
      type: SET_FILTER_BY_TYPE,
      payload: types
    }
  }
  export const setFilterByOrigin = (payload)=>{
    return{
      type: SET_FILTER_BY_ORIGIN,
      payload,
    }
  }
  
  export const orderBy = (order)=>{
    return{
      type: ORDER,
      payload: order
    }

  }