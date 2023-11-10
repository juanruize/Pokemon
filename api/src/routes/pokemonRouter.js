const { Router } = require('express');
const getPokemonsHandler = require ('../handlers/getPokemonsHandler')
const getPokemonsIdHandler = require ('../handlers/getPokemonIdHandler')
const getPokemonNameHandler = require ('../handlers/getPokemonNameHandler')
const postPokemonHandler = require ('../handlers/postPokemonHandler')



const pokemonsRouter = Router();



pokemonsRouter.get("/", getPokemonsHandler )

pokemonsRouter.get("/pokemon", getPokemonNameHandler)

pokemonsRouter.get("/:id", getPokemonsIdHandler)
  

pokemonsRouter.post("/", postPokemonHandler )

module.exports = pokemonsRouter