import { useReducer } from 'react';

function reducer(state, action) {
   switch (action.type) {
      case 'duck':
         return { ...state, currentPage: action.payload };
      default:
         throw new Error(`Action type "${action.type}" does not exist in 'Add Menu' reducer`);
   }
}

export const initialState = {};

export default function useAddMenuReducer() {
   return useReducer(reducer, initialState);
}
