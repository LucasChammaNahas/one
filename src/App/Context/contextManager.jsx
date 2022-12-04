import { createContext, useContext } from 'react';
import useAppReducer from '../Reducers/useAppReducer';

//App
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
export function AppProvider({ children }) {
   const [appState, appDispatch] = useAppReducer();
   return <AppContext.Provider value={{ appState, appDispatch }}>{children}</AppContext.Provider>;
}

//Add Menu
const AddMenuContext = createContext();
export const useAddMenuContext = () => useContext(AddMenuContext);
export function AddMenuProvider({ children }) {
   const [addMenuState, addMenuDispatch] = useAppReducer();
   return <AppContext.Provider value={{ addMenuState, addMenuDispatch }}>{children}</AppContext.Provider>;
}