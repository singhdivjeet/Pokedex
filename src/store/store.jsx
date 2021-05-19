import { createContext, useReducer } from 'react';
import Reducer from './reducer'

const initialState = {
  pokemonList: [],
  pokemonProfile: {},
  modal: false,
  searchResult: [],
  evolutionList:[],
};

export default function Store({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(initialState);
