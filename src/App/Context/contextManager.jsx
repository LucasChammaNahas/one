import { createContext, useContext, useState } from 'react';
import useAppReducer from '../Reducers/useAppReducer';
import useAddMenuReducer from 'App/Reducers/useAddMenuReducer/useAddMenuReducer';


const contextData = [
   ['App', useAppReducer],
   ['AddMenu', useAddMenuReducer],
   ['SearchWithDropdown', useState],
]

const contextsObj = {};

for (const [name, useStateOrReducer] of contextData) {
   const useContextName = 'use' + name + 'Context';
   const withProviderName = 'with' + name + 'Provider';

   const Context = createContext();
   const useMyContext = () => useContext(Context);
   const withProvider = (Component) => () => (
      <Context.Provider value={useStateOrReducer()}>
         <Component />
      </Context.Provider>
   );

   contextsObj[useContextName] = useMyContext ;
   contextsObj[withProviderName] = withProvider;
}

export default contextsObj;

// // App
// const AppContext = createContext();
// export const useAppContext = () => useContext(AppContext);
// export function withAppProvider(App) {
//    return function () {
//       const [appState, appDispatch] = useAppReducer();
//       return <AppContext.Provider value={{ appState, appDispatch }}><App /></AppContext.Provider>;
//    }
// }

// // Add Menu
// const AddMenuContext = createContext();
// export const useAddMenuContext = () => useContext(AddMenuContext);
// export function AddMenuProvider({ children }) {
//    const [addMenuState, addMenuDispatch] = useAddMenuReducer();
//    return <AddMenuContext.Provider value={{ addMenuState, addMenuDispatch }}>{children}</AddMenuContext.Provider>;
// }

// // Add Menu Search with Dropdown
// const SearchWithDropdownContext = createContext();
// export const useSearchWithDropdown = () => useContext(SearchWithDropdownContext);
// export function SearchWithDropdownProvider({ children }) {
//    const [searchWithDropdownState, setSearchWithDropdownState] = useState();
//    return <SearchWithDropdownContext.Provider value={{ searchWithDropdownState, setSearchWithDropdownState }}>{children}</SearchWithDropdownContext.Provider>;
// }

