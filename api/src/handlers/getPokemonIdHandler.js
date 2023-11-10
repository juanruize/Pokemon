const {getPokemonsIdController} = require ("../controllers/getPokemonIdController")

const getPokemonIdHandler = async (req, res)=>{
    const {id} =req.params;
  
    try {

      const response = await getPokemonsIdController(id)

      res.status(200).json(response)
    } catch (error) {
      res.status(400).json({error: error.message})
    }

  }

module.exports= getPokemonIdHandler

