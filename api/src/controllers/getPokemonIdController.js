const axios = require ('axios')

const {Pokemon, Type} = require ('../db')

const getPokemonsIdController = async (id) =>{
    try{

   

    if(isNaN(id)){
        return await Pokemon.findOne({
            where: {id: id},
            include:{
                model: Type,
                attributes: {
                    exclude: ["id"]

                }, 
                through: {
                    attributes: []
                }
            }
        })
    }
    else{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const {data} = await axios (url)

        const pokemonId = {
            id: id,
            name: data.name,
            image: data.sprites.other.home.front_default,
            hp: data.stats.find((stat)=>stat.stat.name === 'hp').base_stat,
            attack: data.stats.find((stat)=>stat.stat.name === 'attack').base_stat,
            defense: data.stats.find((stat)=>stat.stat.name === 'defense').base_stat,
            speed: data.stats.find((stat)=> stat.stat.name === 'speed').base_stat,
            height: data.height,
            weight: data.weight,
            types: data.types.map((type)=>type.type.name)
        }
        return pokemonId
    }
}
    catch(error){
        throw new Error ('THE POKEMON ID IS INVALID')
    }

}
module.exports = {
    getPokemonsIdController
}