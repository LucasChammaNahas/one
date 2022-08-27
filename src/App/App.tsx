import { createContext } from 'react';

// import LoginPage from 'App/Login/LoginPage';

import useApi from './Api/useApi';
import useAppState, { initialAppState } from './States/useAppState';


const GlobalContext = createContext(initialAppState);

export default function App() {
  const [appState, dispatch] = useAppState();
  useApi(appState, dispatch);

  if (appState.isLoading === true) return <h1 className="p-24">loading...</h1>
  // if (appState.isLoggedIn === false) return <LoginPage />;

  return (
    <GlobalContext.Provider value={appState}>
      <div>oi</div>
    </GlobalContext.Provider>
  );
}
