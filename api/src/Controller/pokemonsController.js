const axios = require("axios");
const { Pokemon, Type } = require("../db");

//GET ALL
const getPokemonsAllController = async (req, res) => {
  //llamar a la funcion que obtienme los datos de la BDD
  //llamar a la funcion que obtenga los datos de la API externa
  //Unir los datos, unificando el formato
  //Cuando tenga los datos ahora si responder con estos mismos
  const { name } = req.query;
  let pokeAPI = [];
  let pokeLocal = [];
  
  try {
  if (!name) {
  const responseAPI = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  pokeAPI = responseAPI.data.results;
  const ResponseLocal = await Pokemon.findAll({ include: [Type] });
  return res.json([...ResponseLocal, ...pokeAPI]);
  } else {
  const responseAPI = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  pokeAPI = responseAPI.data.results.filter((poke) => {
  return poke.name.toLowerCase().includes(nameQuery);
  });
  return res.json([...pokeLocal, ...pokeAPI]);
  }
  } catch (error) {
  console.error(error);
  return res.status(500).json({ message: "Internal server error" });
  }
  
};

// GET PARAMS: ID
const getPokemonsByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id.length === 36) {
      // Obtener el Pokemon de la base de datos
      const pokemon = await Pokemon.findByPk(id, { include: Type });
      // Devolver el Pokemon como una respuesta al cliente
      return res.json(pokemon);
    } else {
      // Obtener el Pokemon de la API externa
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      // Construir el objeto del Pokemon a partir de la respuesta de la API
      const pokemon = {
        name: response.data.name,
        imagen: response.data.sprites.other['official-artwork'].front_default,
        type: response.data.types.map((Type) => Type.type.name),
        health: response.data.stats.find((hp) => hp.stat.name === "hp"),
        attack: response.data.stats.find((att) => att.stat.name === "attack").base_stat,
        defense: response.data.stats.find((def) => def.stat.name === "defense").base_stat,
        speed: response.data.stats.find((spe) => spe.stat.name === "speed").base_stat,
        height: response.data.height,
        weight: response.data.weight,
      };
      // Devolver el objeto del Pokemon como una respuesta al cliente
      return res.json(pokemon);
    }
  } catch (error) {
    // Manejar errores
    return next(error);
  }
};

// const createPokemonController = (req, res) => {
//   const { name, imagen, health, attack, defense, speed, height, weight, type } = req.body;
//   Pokemon.create({
//     name,
//     imagen,
//     health,
//     attack,
//     defense,
//     speed,
//     height,
//     weight,
//     type
//   })
//   .then((PokeCreated)=> {
//     return PokeCreated.setTypes(type); 
//   })
//   .then(() => {
//     return res.json({
//         message: "Successfully! "

//     });
//   })
//   .catch((error) => new Error(error))
// };

const createPokemonController = async (req, res, next) => {
  try {
    const { name, imagen, health, attack, defense, speed, height, weight, type } = req.body;

    // Validar que se proporcionen todos los campos necesarios
    if (!name || !imagen || !health || !attack || !defense || !speed || !height || !weight || !type) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Crear un nuevo registro de Pokemon en la base de datos
    const pokemon = await Pokemon.create({
      name,
      imagen,
      health,
      attack,
      defense,
      speed,
      height,
      weight,
      type
    });

    // Asociar el tipo del Pokemon recién creado
    await pokemon.setTypes(type);

    // Devolver una respuesta al cliente con el ID del Pokemon creado
    return res.status(201).json({
      message: 'Pokemon created successfully',
      id: pokemon.id,
    });
  } catch (error) {
    // Manejar errores
    return next(error);
  }
};


module.exports = {
  getPokemonsAllController,
  getPokemonsByIdController,
  createPokemonController,
};
