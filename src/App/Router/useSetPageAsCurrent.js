import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function useSetPageAsCurrent(page) {
   const navigate = useNavigate();
   const navState = useLocation().state ?? {};
   const options = {
      state: { ...navState, currentPage: page },
   };

   useEffect(() => {
      navigate(null, options);
   }, []); //eslint-disable-line
}
