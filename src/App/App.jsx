import { createContext } from 'react';
import useApi from './Api/useApi';
import LoginPage from './Pages/Login/LoginPage';
import useAppReducer, { initialAppState } from './StateManagement/useAppReducer';
import PagesContainerWithNavigation from './Components/PagesContainerWithNavigation/PagesContainerWithNavigation';
import { BrowserRouter } from 'react-router-dom'
import { AppContext } from './StateManagement/useContexts';


const GlobalContext = createContext(initialAppState);

export default function App() {
  const [appState, appDispatch] = useAppReducer();
  // useApi(appState, dispatch);

  // if (appState.isLoading === true) return <h1 className="p-24">loading...</h1>
  // if (appState.isLoggedIn === false) return <LoginPage />;

  return (
    <BrowserRouter>
      <AppContext.Provider value={{appState, appDispatch}}>
        <PagesContainerWithNavigation />
      </AppContext.Provider>
    </BrowserRouter>
  );
}
