import useApi from './Api/useApi';
import useAppReducer from './StateManagement/useAppReducer';
import { AppContext } from './StateManagement/contextsManager';
import { BrowserRouter } from 'react-router-dom'

import { AppProvider } from './StateManagement/contextsManager';

import LoginPage from './Pages/Login/LoginPage';
import PagesContainerWithNavigation from './Components/PagesContainerWithNavigation/PagesContainerWithNavigation';



export default function App() {
  const [appState, appDispatch] = useAppReducer();
  // useApi(appState, dispatch);

  // if (appState.isLoading === true) return <h1 className="p-24">loading...</h1>
  // if (appState.isLoggedIn === false) return <LoginPage />;

  return (
    <BrowserRouter>
      {/* <AppContext.Provider value={{appState, appDispatch}}> */}
      <AppProvider>

        <PagesContainerWithNavigation />
      </AppProvider>
      {/* </AppContext.Provider> */}
    </BrowserRouter>
  );
}
