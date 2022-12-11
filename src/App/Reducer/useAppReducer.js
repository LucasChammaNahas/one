import { useReducer } from 'react';
import { CURRENT_PAGE } from './reducerConstants';

function reducer(state, action) {
   switch (action.type) {
      case CURRENT_PAGE:
         return { ...state, currentPage: action.payload };
      case 'login':
         return { ...state, isLoggedIn: true, user: action.payload };
      case 'load':
         return { ...state, isLoading: false };
      default:
         throw new Error(`Action type "${action.type}" does not exist in app reducer`);
   }
}

const initialState = {
   currentPage: undefined,
   isLoggedIn: false,
   user: undefined,
   isLoading: true,
};

export default function useAppReducer() {
   return useReducer(reducer, initialState);
}
