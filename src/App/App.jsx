import useApi from './Api/useApi';
import LoginPage from './Pages/Login/LoginPage';
import PagesContainerWithNavigation from './Components/PagesContainerWithNavigation/PagesContainerWithNavigation';



export default function App() {
  // useApi();

  // if (appState.isLoading === true) return <h1 className="p-24">loading...</h1>
  // if (appState.isLoggedIn === false) return <LoginPage />;

  return (
    <PagesContainerWithNavigation />
  );
}
