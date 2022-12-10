import { createContextEcosystem } from 'App/Hooks/createContextEcosystem';
import useAddMenuReducer from './useAddMenuReducer/useAddMenuReducer';

export const [
   useAddMenuContext, 
   withAddMenuProvider,
] = createContextEcosystem(useAddMenuReducer);
