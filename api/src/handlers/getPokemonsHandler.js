const getPokemons = require ('../controllers/getPokemonsController')

const getPokemonsHandler = async (req, res)=>{

    try {
      const response = await getPokemons()
      res.status(200).json(response)
    } catch (error) {
      res.status(400).json({error: error.message})
    }

    
  }

module.exports = getPokemonsHandler