const axios = require ('axios')

const { Type} = require ('../db')

const getTypes = async ()=>{
    const url = 'https://pokeapi.co/api/v2/type'
    try {
        const dbTypes = await Type.findAll()

        if(dbTypes.length===0){

            const apiResponse = await axios.get(url)
            const apiTypes = apiResponse.data.results
            //asi cargo los types en la base de datos
            await Type.bulkCreate(apiTypes.map((type) => ({ name: type.name })))

            const updatedDbTypes = await Type.findAll()
            return updatedDbTypes

        }
        else{
            return dbTypes
        }
        
     } catch (error) {
        throw new Error ('ERROR GETING TYPES')
        
    }}
//     const getTypes = async() =>{
    
        
//         const dbTypes = await Type.findAll()

//         if (dbTypes.length === 0) {
//             const url = 'https://pokeapi.co/api/v2/type'
//             const {data} = await axios(url)
    
//             const listTypes = data.results.map((type)=>{
//                 return {name: type.name}
//             })
//             await Type.bulkCreate(listTypes)


//             const dbTypesActualized = await Type.findAll()
//         return dbTypesActualized
//         }
//         const dbView = dbTypes.map((name)=>{
//             return name.name
//         })
//         return dbView

// }

module.exports = getTypes