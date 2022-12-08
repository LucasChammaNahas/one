import { ACTIONS } from 'App/Reducers/useAddMenuReducer/useAddMenuReducer';
import contextManager from 'App/Context/contextManager';
const { useAddMenuContext } = contextManager;

export default function AddMenuNextTabButton() {
   const { addMenuDispatch } = useAddMenuContext();

   return (
      <div className="max-w-xs">
         <button onClick={() => addMenuDispatch({ type: ACTIONS.nextTab })}>click me if you can</button>
      </div>
   )
}