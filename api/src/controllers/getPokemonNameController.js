 const axios = require ('axios')

const {Pokemon, Type} = require ('../db')

 const getPokemonNameController = async (name)=>{
    let pokemons = []
    if(!name) throw new Error ('PLEASE PROVIDE A VALID NAME')
    name=name.toLowerCase()
    try{

    
    const pokemonCreated = await Pokemon.findAll({
        where: {
            name: name
        },
        include:{
            model:Type,
            attributes:{
                exclude: ["id"]
            },
            through: {
                attributes: []
            }
        }
    })
    if(pokemonCreated.length) return pokemonCreated

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const {data} = await axios (url)
    
    
    const pokemonName = {
        
        id:data.id,
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
    return pokemonName
}
catch(error){
   if(pokemons.length===0) throw new Error ("POKEMON NO EXISTE")
    
}

}
module.exports ={
    getPokemonNameController
}
