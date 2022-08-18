import { useEffect } from "react";

export default function useApi(globalStates: Object, setGlobalStates: Function) {

  useEffect(() => {
    setGlobalStates({...globalStates, isLoggedIn: true, user: "Lucas"});
  }, []); // eslint-disable-line
  
  useEffect(() => {
    if (globalStates.isLoggedIn === false) return; 
    const callApi = async () => {
      const rawRes = await fetch('https://dog.ceo/api/breeds/image/random');
      const res = await rawRes.json();
      const imgUrl = res.message;
      setGlobalStates({...globalStates, imgUrl});
    };
    callApi();
  }, [globalStates.isLoggedIn]); // eslint-disable-line

  return;
}