import { useEffect } from "react";

export default function useApi(appState, dispatch) {

  // Login
  useEffect(() => {
    dispatch({ type: 'load' });
    // dispatch({ type: 'login', payload: { name: 'Lucas' } });
  }, []); // eslint-disable-line

  // Load content
  useEffect(() => {
    if (appState.isLoggedIn === false) return;
    const callApi = async () => {
      const rawRes = await fetch('https://dog.ceo/api/breeds/image/random');
      const res = await rawRes.json();
      const imgUrl = res.message;
    };
    // callApi();
  }, [appState.isLoggedIn]); // eslint-disable-line

  return;
}