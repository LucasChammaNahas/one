import { createContext, useContext } from 'react';
import useAppReducer from './useAppReducer';

//App
export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
export function AppProvider({ children }) {
   const [appState, appDispatch] = useAppReducer();
   return <AppContext.Provider value={{ appState, appDispatch }}>{children}</AppContext.Provider>;
}

//Add Menu
export const AddMenuContext = createContext();
export const useAddMenuContext = () => useContext(AddMenuContext);
