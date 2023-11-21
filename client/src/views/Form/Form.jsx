import {Link, useNavigate} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { allTypes } from '../../redux/actions';
import "../Form/Form.styles.css"
import validations from "../Form/Validations"
import axios from 'axios';
function Form () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const types = useSelector((state)=>state.allTypes)
    useEffect(()=>{
        dispatch(allTypes())
    }, [])
    
    const [data, setData] = useState ({ //estado local para almacenar los datos del form
        name: "",
        image: "",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types: [],
    })
    
    
     const [selectedTypes, setSelectedTypes] = useState ([])
     const [errors, setErrors]= useState({})
    
    // const handlerTypeChange = (event) =>{
    //     let selectedOptions = [...event.target.selectedOptions]
    //     const maxOptions = 2 
    //     if (selectedOptions.length>maxOptions){
    //         event.targer.options[selectedOptions[selectedOptions.length-1].index].selected=true
    //     }
    //     selectedOptions=selectedOptions.map(opcion=>opcion.value)
    //     setData({
    //         ...data,
    //         types: selectedOptions
    //     })
    //     setSelectedTypes(selectedOptions)
        
    // }

    const handlerTypeChange = (event) => {
        const { checked, value } = event.target;
      
        let updatedTypes;
        
        if (checked) {
          // Si está marcado, agregarlo a la lista
          updatedTypes = data.types.length < 2 ? [...data.types, value] : data.types;
        } else {
          // Si no está marcado, quitarlo de la lista
          updatedTypes = data.types.filter((type) => type !== value);
        }
      
        setData({
          ...data,
          types: updatedTypes,
        });
        setSelectedTypes(updatedTypes) //seteo el estado local con los types
      };
    //console.log(selectedTypes)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          // Enviar una solicitud POST al servidor para crear el Pokémon
          const response = await axios.post("http://localhost:3001/pokemons", data);
      
          // Verificar la respuesta del servidor
          if (response.status === 200) {
            console.log("Nuevo Pokémon creado con éxito:", response.data);
            // Actualizamos el estado global del store con el nuevo pokemon
                 await response.data?.id;
                 
            // Redireccionamos a la ruta donde ver el detalle del nuevo pokemon
                 navigate(`/detail/${response.data.id}`);
          }
      
        } catch (error) {
          alert ("Error al crear el Pokémon:", error);
         
        }
      };

    const handleInputChange = (event)=>{
        const {name, value} = event.target

        setData({
            ...data,
            [name]: value
        })
        setErrors(  
            validations({
            ...data,
            [name]: value,
          }))
    }
    //console.log(errors)

    

    return(
        <form>
            <h1>CREATE YOUR POKEMON</h1>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" value={data.name} name='name' id='name' onChange={handleInputChange}/>
                {
                    errors.name &&
                    <span>
                        {errors.name}
                    </span>
                }
                <br/>
            </div>
            <div>
                <label htmlFor="image">Image: </label>
                <input type="text" value={data.image} name='image' id='image' onChange={handleInputChange}/>
                {
                    errors.image &&
                    <span>
                        {errors.image}
                    </span>
                }
                <br/>

            </div>
            <div>
                <label htmlFor="hp">Hp: </label>
                <input type="text" value={data.hp} name='hp' id='hp' onChange={handleInputChange}/>
                {
                    errors.hp &&
                    <span>
                        {errors.hp}
                    </span>
                }
                <br/>
            </div>
            <div>
                <label htmlFor='attack'>Attack: </label>
                <input type="text" value={data.attack} name='attack' id='attack' onChange={handleInputChange}/>
                {
                    errors.attack &&
                    <span>
                        {errors.attack}
                    </span>
                }
                <br/>
            </div>
            <div>
                <label htmlFor='defense'>Defense: </label>
                <input type="text" value={data.defense} name='defense' id='defense' onChange={handleInputChange}/>
                {
                    errors.defense &&
                    <span>
                        {errors.defense}
                    </span>
                }
                <br/>
            </div>
            <div>
                <label htmlFor='speed'>Speed: </label>
                <input type="text" value={data.speed} name='speed' id='speed' onChange={handleInputChange}/>
                {
                    errors.speed &&
                    <span>
                        {errors.speed}
                    </span>
                }
                <br/>
            </div>
            <div>
                <label htmlFor="height">Height: </label>
                <input type="text" value={data.height} name='height' id='height' onChange={handleInputChange}/>
                {
                    errors.height &&
                    <span>
                        {errors.height}
                    </span>
                }
                <br/>
            </div>
            <div>
                <label htmlFor="weight">Weight: </label>
                <input type="text" value={data.weight} name='weight' id='weight' onChange={handleInputChange}/>
                {
                    errors.weight &&
                    <span>
                        {errors.weight}
                    </span>
                }
                <br/>
            </div>
            {/* <label htmlFor="types"> Types:</label>
                <div>
                    <select id="types" multiple={true} onChange= {handlerTypeChange} className="selectType">
                        {types.map((type)=>(
                            <option key={type.name} value={type.name}>
                                {type.name}
                            </option>
                        ))}

                    </select>
                </div>
                
                
                <div>
                  <p>Seleccionado(s): {selectedTypes.join(", ")}</p>
                </div> */}
                <label htmlFor="types">Types:</label>
                {
                            errors.types && <p>{errors.types}</p>
                        }
    <div>
      {types.map((type) => (
        <div key={type.name} className="checkboxOption">
          <label>
            <input
              type="checkbox"
              value={type.name}
              onChange={handlerTypeChange}
              checked={data.types.includes(type.name)}
            />
            {type.name}
          </label>
        </div>
      ))}
    </div>
    <div>
      <p>Seleccionado(s): {selectedTypes.join(", ")}</p>
    </div>
                

            
            <button type='submit' onClick={handleSubmit}>CREATE</button>
        </form>
    )
}
export default Form