import { createContext, useContext, useState } from 'react';


export function createContextEcosystem(useReducer) {
   const useStateOrReducer = useReducer ?? useState;
   const Context = createContext();

   const useThisContext = () => useContext(Context);

   const Provider = ({ children }) => (
      <Context.Provider value={useStateOrReducer()}>
         {children}
      </Context.Provider>
   );

   const withProvider = (Component) => (props) => (
      <Provider>
         <Component {...props} />
      </Provider>
   );

   return [useThisContext, withProvider, Provider];
}
