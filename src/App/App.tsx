import { createContext } from 'react';
import useApi from './Api/useApi';
import LoginPage from './Pages/Login/LoginPage';
import IngredientsPage from './Pages/IngredientsPage/IngredientsPage';
import useAppReducer, { initialAppState } from './Reducer/useAppReducer';


const GlobalContext = createContext(initialAppState);

export default function App() {
  const [appState, dispatch] = useAppReducer();
  useApi(appState, dispatch);

  // if (appState.isLoading === true) return <h1 className="p-24">loading...</h1>
  // if (appState.isLoggedIn === false) return <LoginPage />;

  return (
    <GlobalContext.Provider value={appState}>
      <IngredientsPage />
    </GlobalContext.Provider>
  );
}
