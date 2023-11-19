import axios from "axios";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import '../Detail/Detail.styles.css'
import retorno from "../../assets/pokemon.webp"




const Detail = () => {
  const {id}= useParams();
  const [pokemon,setPokemon]= useState({});
 

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const response = await axios(`http://localhost:3001/pokemons/${id}`);
        const { data } = response;

        if (data.name) {
          if (typeof data.types[0] === 'object') {
            data.types = data.types.map((type) => type.name);
          }

          setPokemon(data);
           
        } else {
          window.alert('No hay personajes con ese ID');
          setPokemon({});
           
        }
      } catch (error) {
        console.error('Error al obtener los detalles del Pokémon', error);
        setPokemon({});
        
      }
    };

    getPokemonDetails();
  }, [id]);

    
  

   // Verificar que pokemon.types esté definido antes de usarlo
   const typesClass = pokemon?.types ? pokemon.types[0] : "";
  
  return (
    <div >
      
      <Link to = "/Home">
            <img src={retorno}/>
        </Link>

      <div >
        <img src={pokemon?.image} alt={pokemon?.name} />
      </div>

      <div >
        <h2>
          {pokemon?.id }
        </h2>
        <h1>Name: {pokemon?.name}</h1>
        <p>Hp: {pokemon?.hp}</p>
        <p>Speed: {pokemon?.speed}</p>
        <p>Attack: {pokemon?.attack}</p>
        <p>Defense: {pokemon?.defense}</p>
        <p>Height: {pokemon?.height}</p>
        <p>Weight: {pokemon?.weight}</p>

        <div >
          <div >
            <div >
              <p>Type:</p>
              <h3>{pokemon?.types?.join(", ")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;