import useApi from './Api/useApi';
import LoginPage from './Pages/Login/LoginPage';
import PagesContainerWithNavigation from './Components/PagesContainerWithNavigation/PagesContainerWithNavigation';
import contextManager  from 'App/Context/contextManager';
const {useAppContext, withAppProvider} = contextManager;
// import { withAppProvider } from './Context/contextManager';



function App() {
  const x = useAppContext();
  console.log('--> app 1', x)
  // useApi();

  // if (appState.isLoading === true) return <h1 className="p-24">loading...</h1>
  // if (appState.isLoggedIn === false) return <LoginPage />;

  return (
    <PagesContainerWithNavigation />
  );
}



export default withAppProvider(App);
// export default App;


