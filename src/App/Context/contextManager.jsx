import { createContext, useContext, useState } from 'react';
import useAppReducer from '../Reducers/useAppReducer';
import useAddMenuReducer from 'App/Reducers/useAddMenuReducer/useAddMenuReducer';

// App
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
export function AppProvider({ children }) {
   const [appState, appDispatch] = useAppReducer();
   return <AppContext.Provider value={{ appState, appDispatch }}>{children}</AppContext.Provider>;
}

// Add Menu
const AddMenuContext = createContext();
export const useAddMenuContext = () => useContext(AddMenuContext);
export function AddMenuProvider({ children }) {
   const [addMenuState, addMenuDispatch] = useAddMenuReducer();
   return <AddMenuContext.Provider value={{ addMenuState, addMenuDispatch }}>{children}</AddMenuContext.Provider>;
}

// Add Menu Search with Dropdown
const SearchWithDropdownContext = createContext();
export const useSearchWithDropdown = () => useContext(SearchWithDropdownContext);
export function SearchWithDropdownProvider({ children }) {
   const [searchWithDropdownState, setSearchWithDropdownState] = useState();
   return <SearchWithDropdownContext.Provider value={{ searchWithDropdownState, setSearchWithDropdownState }}>{children}</SearchWithDropdownContext.Provider>;
}