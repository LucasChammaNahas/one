import { createContext, useContext } from 'react';

// Criação do AppContext
const Context = createContext();

// Criação do Provider
const Provider = ({ children, states }) => {

  return (
    <Context.Provider value={ states }>
      {children}
    </Context.Provider>
  );
};

// Simplificação do uso posterior do useContext
const useStates = () => useContext(Context);

export { Provider };
export { useStates };
