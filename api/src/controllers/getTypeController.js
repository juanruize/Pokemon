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
        
    }

}
module.exports = getTypes