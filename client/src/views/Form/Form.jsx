import {Link, useNavigate} from 'react-router-dom'
//import { addFav, removeFav } from '../redux/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { allTypes } from '../../redux/actions';
import "../Form/Form.styles.css"

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
        tipes: [],
    })
    
    
     const [selectedTypes, setSelectedTypes] = useState ([])
    
    const handlerTypeChange = (event) =>{
        let selectedOptions = [...event.target.selectedOptions]
        const maxOptions = 2 
        if (selectedOptions.length>maxOptions){
            event.targer.options[selectedOptions[selectedOptions.length-1].index].selected=true
        }
        selectedOptions=selectedOptions.map(opcion=>opcion.value)
        setData({
            ...data,
            types: selectedOptions
        })
        setSelectedTypes(selectedOptions)
        
    }
    
    console.log(selectedTypes)

    

    return(
        <form>
            <h1>CREATE YOUR POKEMON</h1>
            <div>
                <label htmlFor=''>Name: </label>
                <input type='string'/>
                <br/>
            </div>
            <div>
                <label htmlFor=''>Image: </label>
                <input type='string'/>
                <br/>
            </div>
            <div>
                <label htmlFor=''>Hp: </label>
                <input type='integer'/>
                <br/>
            </div>
            <div>
                <label htmlFor=''>Attack: </label>
                <input type='integer'/>
                <br/>
            </div>
            <div>
                <label htmlFor=''>Defense: </label>
                <input type='integer'/>
                <br/>
            </div>
            <div>
                <label htmlFor=''>Height: </label>
                <input type='integer'/>
                <br/>
            </div>
            <div>
                <label htmlFor=''>Weight: </label>
                <input type='integer'/>
                <br/>
            </div>
            <label htmlFor=''> Types:</label>
                <div>
                    <select id='types' multiple={true} onChange= {handlerTypeChange} className="selectType">
                        {types.map((type)=>(
                            <option key={type.name} value={type.name}>
                                {type.name}
                            </option>
                        ))}

                    </select>
                </div>
                <div>
                  <p>Seleccionado(s): {selectedTypes.join(", ")}</p>
                </div>
                

            
            <button>CREATE</button>
        </form>
    )
}
export default Form