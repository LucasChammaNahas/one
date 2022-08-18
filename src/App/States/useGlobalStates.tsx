import { useState } from 'react';

export default function useGlobalStates() {
  return useState({
    isLoggedIn: false,
    user: undefined,
    isLoading: true,
  });

  // return [globalStates, setGlobalStates];
}