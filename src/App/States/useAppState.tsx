import { useReducer } from "react";
import { IAppState, IAction } from '../Model/AppState.model';


function reducer(state: IAppState, action: IAction) {
  switch (action.type) {
    case 'login':
      return { ...state, isLoggedIn: action.payload }
    default:
      throw new Error(`Action type "${action.type}" does not exist in app reducer`);
  }
}

export const initialAppState: IAppState = {
  isLoggedIn: false,
  user: undefined,
  isLoading: true,
};

export default function useAppState() {
  return useReducer(reducer, initialAppState);
}


