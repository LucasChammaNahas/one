import { useReducer } from "react";
import { IAppState, IAction } from '../Model/AppReducer.model';


function reducer(state: IAppState, action: IAction) {
  switch (action.type) {
    case 'login':
      return { ...state, isLoggedIn: true, user: action.payload }
    case 'load':
      return { ...state, isLoading: false };
    default:
      throw new Error(`Action type "${action.type}" does not exist in app reducer`);
  }
}

export const initialAppState: IAppState = {
  isLoggedIn: false,
  user: undefined,
  isLoading: true,
};

export default function useAppReducer() {
  return useReducer(reducer, initialAppState);
}


