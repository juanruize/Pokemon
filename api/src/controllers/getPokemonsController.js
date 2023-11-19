const axios = require ('axios')

const {Pokemon, Type} = require ('../db')

const getPokemonsController = async()=>{

    try {
        const url = `https://pokeapi.co/api/v2/pokemon`
    const limit = 30
    const {data} = await axios(`${url}?limit=${limit}`)

    const pokemons = data.results

    const detailPokemons = await Promise.all(pokemons.map(async(pokemon)=>{
        const {data}= await axios(pokemon.url)
        const character={
            id: data.id,
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
        return character
    }))
    const pokemonsCreated = await Pokemon.findAll({
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

    return [...pokemonsCreated, ...detailPokemons]
     

    } 
    catch (error) {

        
        throw new Error ('ERROR GETING POKEMONS')
    }
   

}

module.exports = getPokemonsController