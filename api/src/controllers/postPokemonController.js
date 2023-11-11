
const { Pokemon , Type} = require('../db');
const axios = require('axios');

const postPokemon = async (id, name, image, hp, attack, defense, speed, height, weight, types) => {
        if(!name || !image || !hp || !attack || !defense || !speed || !height || !weight || !types){
            throw new Error("ALL FIELDS ARE REQUIRED")
        }
        if(types.length<2){
            throw new Error("DEBE TENER PO LO MENOS 2 TIPOS")
        }
        let prueba=true;
       name = name.toLowerCase()
        const existingPokemon = await Pokemon.findOne({ where: { name } });
        if (existingPokemon) {
            throw new Error("The Pokemon already exists in the database");
        }    
        
            try {
                prueba = await axios (`https://pokeapi.co/api/v2/pokemon/${name}`)
                prueba=null
            } catch (error) {
                
            }
        if(prueba===null) throw new Error ("pokemon existe en api")
            
        const pokemonPost = await Pokemon.create({
                id,
                name,
                image,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
            });
            const typesPromisesArr = types.map(async (type) => {
                
                const [foundType] = await Type.findOrCreate({
                  where: {name: type },
                  defaults: { name: type }
                });
                
                return foundType;
              });
          
              
              const foundTypes = await Promise.all(typesPromisesArr);
          
              
              await pokemonPost.addTypes(foundTypes);
          
            return pokemonPost;
       
   
};

module.exports = {
    postPokemon,
};

