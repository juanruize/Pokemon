import React from 'react';
import "../Search/search.styles.css"

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemon } from '../../redux/actions';

// const Search = ()=>{
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const pokemonDetail = useSelector((state=>state.pokemonDetail))
//     useEffect(() => {
        
//         if (pokemonDetail?.hasOwnProperty('id')) {
//           navigate(`/detail/${pokemonDetail.id}`)
          
//         }
//          return dispatch(loadPokemon("clean"))
        
//       }, [pokemonDetail, dispatch, navigate])

//       const [name, setName] = useState("")

//       const handleSubmit = (event) => {
//         event.preventDefault(); 
//         console.log(pokemonDetail); 
//         dispatch(loadPokemon(name)); 
//       }
//       const handleChange = (event) => {
//         setName(event.target.value);
//       }

//     return(
//         <div className='search-bar'>
//             <input className='search-input'
//             type="text"
//             placeholder="Pokemon"
//             onChange={handleChange}    
//             />
//             <button type="submit"  onClick={handleSubmit} className='search-button'>SEARCH</button>
//         </div>


//     )
// }

// export default Search
const Search = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pokemonDetail = useSelector((state) => state.pokemonDetail);
    
    const [name, setName] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        if (pokemonDetail?.hasOwnProperty('id')) {
          await dispatch(loadPokemon('clean'));
          navigate(`/detail/${pokemonDetail.id}`);
        }
        else if(pokemonDetail.length>0){
          await dispatch(loadPokemon('clean'));
          navigate(`/detail/${pokemonDetail[0].id}`);
        }
      };
  
      fetchData();
    }, [pokemonDetail, dispatch, navigate]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(name)
      await dispatch(loadPokemon(name));
    };
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='search-bar'>
          <input
            className='search-input'
            type='text'
            placeholder='Pokemon'
            onChange={handleChange}
          />
          <button type='submit' className='search-button'>
            SEARCH
          </button>
        </div>
      </form>
    );
  };
  
  export default Search;