import {Link} from 'react-router-dom'
//import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import React from 'react';
import "../Card/Card.styles.css"


function Card ({id, name, image, attack, types}) {
console.log(types)


if (!(typeof types[0]=== "string")){
    for(let i = 0; i<types.length;i++){
        types[i]= types[i].name
    }
   
}

    return(
        <div className='card-container'>
            <Link to={`/detail/${id}`}>
            
            
            
         <h3>{name}</h3>
         
             </Link>
        <img src={image} alt={name} className='imagepoke'/>
         <p>{attack}</p>
         <div>
                {
                    types.map(type=>{
                        return (
                            <p>{type}</p>
                        )
                    })
                }
           </div>
            
         
        </div>
    )
}
export default Card