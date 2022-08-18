import { useEffect } from "react";

export default function useApi(globalStates, setGlobalStates) {

  useEffect(() => {
    setGlobalStates({...globalStates, isLoggedIn: true, user: "Lucas"});
  }, []); // eslint-disable-line
  
  useEffect(() => {
    console.log('--> out', globalStates.isLoggedIn)
    if (globalStates.isLoggedIn === false) return console.log('--> return'); 
    const callApi = async () => {
      const rawRes = await fetch('https://dog.ceo/api/breeds/image/random');
      const res = await rawRes.json();
      const imgUrl = res.message;
      console.log('--> in', globalStates.isLoggedIn)
      setGlobalStates({...globalStates, imgUrl});
    };
    callApi();
  }, [globalStates.isLoggedIn]); // eslint-disable-line
  console.log(globalStates);

  return;
}