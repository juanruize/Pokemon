
import React, { useState } from 'react';
import Navbar from '../../components/Nav/navBar'
import Cards from '../../components/Cards/cards'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, allTypes,  setFilterByType, setFilterByOrigin,  orderBy } from '../../redux/actions';
import Pages from "../../components/Pages/Pages"

import style from "../Home/Home.module.css"

const Home = ()=> {
    const dispatch = useDispatch ()
     const allPokemons = useSelector((state)=>state.pokemons)//estado al que voy a ver
     

     const types= useSelector((state)=>state.allTypes)
     const [order,setOrder] = useState("")
     const [areTypesLoaded, setAreTypesLoaded] = useState(false)

    const [isLoading, setIsLoading] = useState (true)
    

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])


    useEffect(()=>{
        dispatch(allTypes())
    },[dispatch])
 //pages
 
    const [currentPage, setCurrentPage]= useState(1) //estado local de la page empieza en la pagina 1
    const [characterXPage, setCharacterXPage] = useState (12) // estado local de los personajes por pag. inicia en 12
    const iLast = currentPage * characterXPage 
    const iFirst = iLast - characterXPage
    const currentCharacters = allPokemons?.slice(iFirst, iLast)

    const pages = (pageNumber)=>{
        setCurrentPage (pageNumber)
    } // funcion para setear la pag actual o futura 


    
    
  //tipos
  const handleTypeFilter = (event) => {
      
    dispatch(setFilterByType(event.target.value));
  };
  //origen
  const handleFilterOrigin = (event) => {
    
    
    dispatch(setFilterByOrigin(event.target.value))
  }
 
  //RESET
  const handleResetFilters = ()=>{
    dispatch(getPokemons())
    // setOrder("")
    

  }
  const handleOrder=  (event) =>{
    console.log(event)
    const orderValue = event.target.value;
    dispatch(orderBy(orderValue));
    setOrder(`Ordenado ${orderValue}`);
  }
    
    return(
        <div className={style.home}>
         <Navbar/>
         
         <div>
            <p> ORDER BY: </p>
            <select onChange={(event)=> handleOrder (event)}>
            <option value='null'>Order By</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="ATQ-ASC">ATQ ⬆</option>
          <option value="ATQ-DESC">ATQ ⬇</option>
            </select>
         </div>
         <div>
         
            <p>FILTER BY ORIGIN</p>
            <select onChange={(event) => handleFilterOrigin(event)}>
            <option value="ALL"> ALL</option>
                <option value="DB"> DATABASE</option>
                <option value="API">API</option>
            </select>
         <p>FILTER BY TYPE</p>
            <select
              
              onChange={handleTypeFilter}
              
            >
              
              <option value="ALL" >All TYPES</option>
              {types &&
                types.map((tipo) => (
                  <option key={tipo.id} value={tipo.name}>
                    {tipo.name}
                  </option>
                ))}
            </select>
            
         </div>
         <button onClick={handleResetFilters}>Reset Filters</button>
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