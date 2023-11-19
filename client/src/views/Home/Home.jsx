import {Link} from 'react-router-dom'

import { connect } from 'react-redux';
import React, { useState } from 'react';
import Navbar from '../../components/Nav/navBar'
import Cards from '../../components/Cards/cards'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../redux/actions';
import Pages from "../../components/Pages/Pages"

import "../Home/Home.styles.css"

const Home = ()=> {
    const dispatch = useDispatch ()
     const allPokemons = useSelector((state)=>state.pokemons)
     //const allTypes= useSelector((state)=>state.allTypes)
     
    // const [filtered, setFilteres]= useState(pokemons)

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])
 //pages
 
    const [currentPage, setCurrentPage]= useState(1) //estado local de la page empieza en la pagina 1
    const [characterXPage, setCharacterXPage] = useState (12) // estado local de los personajes por pag. inicia en 12
    const iLast = currentPage * characterXPage 
    const iFirst = iLast - characterXPage
    const currentCharacters = allPokemons?.slice(iFirst, iLast)

    console.log(currentCharacters)

    const pages = (pageNumber)=>{
        setCurrentPage (pageNumber)
    } // funcion para setear la pag actual o futura 
    
    return(
        <div className='home'>
         <Navbar/>
         <Pages
            characterXPage={characterXPage}
            allPokemons={allPokemons?.length}
            pages={pages}
            
         />
         <selection>

         <Cards currentCharacters={currentCharacters}/>
         </selection>

         
        </div>
    )
}
export default Home