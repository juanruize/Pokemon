const {getPokemonNameController} = require ('../controllers/getPokemonNameController')

const getPokemonNameHandler = async (req, res)=>{
    const {name} = req.query
    // res.status(200).send("todook")
    try {

      const pokemonName = await getPokemonNameController (name)


      res.status(200).json(pokemonName)
      
    } catch (error) {
      res.status(400).json({error: error.message})
      
    }

    
  }
module.exports = getPokemonNameHandler