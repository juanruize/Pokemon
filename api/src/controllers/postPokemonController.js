const {Pokemon}= require ('../db')

const postPokemon = async(id, name, image, hp, attack, defense, speed, height, weight)=>{

    return await Pokemon.create({id, name, image, hp, attack, defense, speed, height, weight})
     
}

module.exports = {
    postPokemon
}