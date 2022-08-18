import { createContext } from 'react';

import LoginPage from 'App/Login/LoginPage';

// import useApi from './Api/useApi';
// import useGlobalStates from './States/useGlobalStates';

const GlobalContext = createContext(null);

export default function App() {
  // const [globalStates, setGlobalStates] = useGlobalStates();
  // useApi(globalStates, setGlobalStates);
  
  // if (globalStates.isLoading === true) return <h1 className="p-24">loading...</h1>
  // if (globalStates.isLoggedIn === false) return <LoginPage />;

  // return (
  //   <GlobalContext.Provider value={globalStates}>
  //     <div>{globalStates.imgUrl}</div>
  //   </GlobalContext.Provider>
  // );

  return <h1>olar</h1>
}
