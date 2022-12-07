import useApi from './Api/useApi';
import LoginPage from './Pages/Login/LoginPage';
import PagesContainerWithNavigation from './Components/PagesContainerWithNavigation/PagesContainerWithNavigation';
import { useAppContext } from './Context/contextManager';
import { AppProvider } from './Context/contextManager';



function App() {
  // const x = useAppContext();
  // useApi();
console.log('--> app 1', )
  // if (appState.isLoading === true) return <h1 className="p-24">loading...</h1>
  // if (appState.isLoggedIn === false) return <LoginPage />;

  return (
    <PagesContainerWithNavigation />
  );
}

function AppWithContext() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

function withContext(Component) {
  return function () {
    return (
      <AppProvider>
        <Component />
      </AppProvider>
    );
  }
}

// export default withContext(App);
export default AppWithContext;


