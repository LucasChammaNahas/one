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
