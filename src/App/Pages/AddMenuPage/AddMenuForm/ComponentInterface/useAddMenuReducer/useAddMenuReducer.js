import { useReducer } from 'react';
import { getNextTab } from './addMenuReducerFunctions';
import { tabs } from 'App/Pages/AddMenuPage/AddMenuForm/AddMenuMainPanel/AddMenuTabs/addMenuTabsConstants';

export const ACTIONS = {
   menuName: 'menuName',
   activeTab: 'activeTab',
   nextTab: 'nextTab',
};

const initialState = {
   menuName: '',
   activeTab: tabs[0],
};

function reducer(state, action) {
   switch (action.type) {
      case ACTIONS.menuName:
         return { ...state, menuName: action.payload };

      case ACTIONS.activeTab:
         return { ...state, activeTab: action.payload };

      case ACTIONS.nextTab:
         const { activeTab } = state;
         const nextTab = getNextTab({ activeTab });
         if (nextTab === undefined) return state;
         return { ...state, activeTab: nextTab };

      default:
         throw new Error(`Action type "${action.type}" does not exist in 'Add Menu' reducer`);
   }
}

export default function useAddMenuReducer() {
   return useReducer(reducer, initialState);
}
