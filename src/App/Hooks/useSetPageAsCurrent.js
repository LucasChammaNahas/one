import { useEffect, useContext } from 'react';
import { AppContext } from 'App/StateManagement/useContexts';

export default function useSetPageAsCurrent(page) {
   const { appDispatch } = useContext(AppContext);

   useEffect(() => {
      appDispatch({ type: 'currentPage', payload: page });
   }, []); //eslint-disable-line
}
