import { useReducer } from 'react';

const ACTIONS = {
   menuName: 'menuName',
};

function reducer(state, action) {
   switch (action.type) {
      case ACTIONS.menuName:
         return { ...state, menuName: action.payload };
      default:
         throw new Error(`Action type "${action.type}" does not exist in 'Add Menu' reducer`);
   }
}

const initialState = {
   menuName: '',
};

export default function useAddMenuReducer() {
   return useReducer(reducer, initialState);
}
