const { postPokemon } = require("../controllers/postPokemonController")

const postPokemonHandler = async (req, res)=>{
  
  const {id, name, image, hp, attack, defense, speed, height, weight, types } = req.body

  try {
    const response = await postPokemon(id, name, image, hp, attack, defense, speed, height, weight, types)

    res.status(200).json(response)
    
  } catch (error) {
    res.status(400).json({error: error.message})
    
  }
  }

module.exports = postPokemonHandler 