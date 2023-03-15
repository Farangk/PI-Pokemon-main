import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const POKEMON_BY_ID = "POKEMON_BY_ID";
export const GET_NAME= "GET_NAME";


export const pokeGet = () => {
  //El action creator retorna una funcion que despacha la peticion
  return async function (dispatch) {
    let apiData = await axios.get("http://localhost:3001/pokemons", {
      timeout: 10000,
    });
    return dispatch({
      type: "GET_POKEMONS",
      payload: apiData.data,
    });
  };
};

export const getPokemonById = (id) => {
  return async (dispatch) => {
    let apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
    let pokeId = apiData.data;

    dispatch(
        { type: POKEMON_BY_ID,
            payload: pokeId
     });
  };
};


export const getName = (name) => {
  return async (dispatch) => {
    let apiData = await axios.get(`http://localhost:3001/pokemons/${name}`);
    let pokeName = apiData.name;
    dispatch({
      type: "GET_NAME",
      payload: pokeName
    })
  }
}
// export const filterPokemonsByType = (type) => {
//   return {
//     type: "FILTER_POKEMONS_BY_TYPE",
//     payload:type,
//   }
// }


