export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_POKEMON_LIST':
      return {
        ...state,
        pokemonList: action.payload
      };
    case 'SET_POKEMON_PROFILE':
      return {
        ...state,
        pokemonProfile: action.payload
      };
    case 'SET_MODAL':
      return {
        ...state,
        modal: action.payload
      };
    case 'SET_SEARCH_RESULT':
      return {
        ...state,
        searchResult: action.payload
      };
    default:
      return state;
  }
};
