import { pokemonConstants } from  '../_constants/pokemon.constants';

export function pokemon(state = {}, action) {
  switch (action.type) {
    case pokemonConstants.GET_POKEMON_REQUEST:
      return {
        getting: true,
        list: state.list ? [state.list] : []
      };
    case pokemonConstants.GET_POKEMON_SUCCESS:
      return {
        // list: [action.response.data],
        // pokemonList: [...[action.response.data], ...state.list]
        photo: action.response.data
      };
    case pokemonConstants.GET_POKEMON_FAILURE:
      return {
        error: action.error
      };
  default:
    return state;
  }
}
