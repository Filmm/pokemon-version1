import { pokemonConstants } from '../_constants/pokemon.constants';
import axios from 'axios';

export const pokemonActions = {
  getPokemonList,
  // getPokemonImage
};

const api = 'https://pokeapi.co/api/v2';
const imageAPI = 'https://pokeres.bastionbot.org/images/pokemon'

function getPokemonList(i) {
  return (dispatch) => {
    dispatch(request());

    return axios
      .get(`${imageAPI}/1.png`)
      .then((response) => {
        dispatch(success(response));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {
      type: pokemonConstants.GET_POKEMON_REQUEST
    };
  }

  function success(response) {
    return {
      type: pokemonConstants.GET_POKEMON_SUCCESS,
      response,
    };
  }

  function failure(error) {
    return {
      type: pokemonConstants.GET_POKEMON_FAILURE,
      error
    };
  }
}

// function getPokemonImage(pokeID) {
//   return (dispatch) => {
//     dispatch(request());

//     return axios
//       .get(`${api}/${pokeID}.png`)
//       .then((response) => {
//         dispatch(success(response));
//       })
//       .catch((error) => {
//         dispatch(failure(error));
//       });
//   };

//   function request() {
//     return {
//       type: pokemonConstants.GET_POKEMON_REQUEST
//     };
//   }

//   function success(response) {
//     return {
//       type: pokemonConstants.GET_POKEMON_SUCCESS,
//       response,
//     };
//   }

//   function failure(error) {
//     return {
//       type: pokemonConstants.GET_POKEMON_FAILURE,
//       error
//     };
//   }
// }
