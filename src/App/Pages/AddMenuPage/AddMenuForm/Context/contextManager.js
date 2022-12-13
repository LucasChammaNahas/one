import { createContextEcosystem } from 'App/Context/createContextEcosystem';
import useAddMenuReducer from './useAddMenuReducer/useAddMenuReducer';

export const [
   useAddMenuContext, 
   withAddMenuProvider,
] = createContextEcosystem(useAddMenuReducer);
