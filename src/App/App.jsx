import { createContext } from 'react';
import useApi from './Api/useApi';
import LoginPage from './Pages/Login/LoginPage';
import useAppReducer, { initialAppState } from './Reducer/useAppReducer';
import PagesContainerWithNavigation from './Components/PagesContainerWithNavigation/PagesContainerWithNavigation';


const GlobalContext = createContext(initialAppState);

export default function App() {
  const [appState, dispatch] = useAppReducer();
  useApi(appState, dispatch);

  // if (appState.isLoading === true) return <h1 className="p-24">loading...</h1>
  // if (appState.isLoggedIn === false) return <LoginPage />;

  return (
    <GlobalContext.Provider value={appState}>
      <PagesContainerWithNavigation />
    </GlobalContext.Provider>
  );
}