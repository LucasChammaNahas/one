import { useReducer } from 'react';
import { tabs } from 'App/Pages/AddMenuPage/AddMenuForm/AddMenuMainPanel/AddMenuTabs/addMenuTabsConstants';
import { getNextTab } from './addMenuReducerFunctions';

export const ACTIONS = {
   menuName: 'menuName',
   activeTab: 'activeTab',
   nextTab: 'nextTab'
};

function reducer(state, action) {
   switch (action.type) {
      case ACTIONS.menuName:
         return { ...state, menuName: action.payload };
      case ACTIONS.activeTab:
         return { ...state, activeTab: action.payload };
      default:
         throw new Error(`Action type "${action.type}" does not exist in 'Add Menu' reducer`);
   }
}

const initialState = {
   menuName: '',
   activeTab: undefined,
};

export default function useAddMenuReducer() {
   return useReducer(reducer, initialState);
}
