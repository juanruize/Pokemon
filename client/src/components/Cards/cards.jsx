import {Link} from 'react-router-dom'

import { connect } from 'react-redux';
import React from 'react';
import Card from '../Card/card'
import '../Cards/Cards.styles.css'


const Cards = ({currentCharacters})=>{

    const pokemonsList= currentCharacters
    

    return (
        <div className='cards'>
            {
                pokemonsList?.map((pokemon)=>{
                    return (
                        <Card 
                        key= {pokemon.id}
                        id= {pokemon.id}
                        name= {pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                        />
                    )
                })
            }

        </div>
    );
}
export default Cards