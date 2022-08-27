import { Dispatch, SetStateAction, useEffect } from "react";
import IGlobalState from "../Model/GlobalStates.model"

export default function useApi(globalStates: IGlobalState, setGlobalStates: Dispatch<SetStateAction<IGlobalState>>) {
// export default function useApi(globalStates: any, setGlobalStates: Dispatch<IGlobalState>) {

  useEffect(() => {
    setGlobalStates({...globalStates, isLoggedIn: true, user: "Lucas"});
  }, []); // eslint-disable-line
  
  useEffect(() => {
    if (globalStates.isLoggedIn === false) return; 
    const callApi = async () => {
      const rawRes = await fetch('https://dog.ceo/api/breeds/image/random');
      const res = await rawRes.json();
      const imgUrl = res.message;
      // setGlobalStates({...globalStates, imgUrl});
    };
    callApi();
  }, [globalStates.isLoggedIn]); // eslint-disable-line

  return;
}