const { Router } = require('express');
const {getPokemonsAllController, getPokemonsByIdController, createPokemonController} = require('../Controller/pokemonsController'); 
const router = Router();


router.get('/', getPokemonsAllController); //Nota : ¿Puede ser Query? Si si puede xD recuerda ponerlo en el controlador 
router.get('/:id', getPokemonsByIdController); 
router.post('/', createPokemonController)




module.exports = router;