const getPokemonsHandler = (req, res)=>{
    res.status(200).send("aqui estan todos los pokemons")
  }

module.exports = getPokemonsHandler