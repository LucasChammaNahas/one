import { ACTIONS } from 'App/Reducers/useAddMenuReducer/useAddMenuReducer';
import allContexts from 'App/Context/contextManager';
const { useAddMenuContext } = allContexts;

export default function AddMenuNextTabButton() {
   const { addMenuDispatch } = useAddMenuContext();

   return (
      <div className="max-w-xs">
         <button onClick={() => addMenuDispatch({ type: ACTIONS.nextTab })}>click me if you can</button>
      </div>
   )
}