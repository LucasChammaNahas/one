import { useState } from 'react';

export default function useGlobalStates() {
  const [globalStates, setGlobalStates] = useState({
    isLoggedIn: false,
    user: undefined,
    isLoading: true,
  });

  return [globalStates, setGlobalStates];
}