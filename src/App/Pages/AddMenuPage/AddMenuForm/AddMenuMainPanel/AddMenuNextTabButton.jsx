import { useAddMenuContext } from '../InternalAPI/internalAPI';
import { ACTIONS } from 'App/Reducers/useAddMenuReducer/useAddMenuReducer';

export default function AddMenuNextTabButton() {
   const { addMenuDispatch } = useAddMenuContext();

   return (
      <div className="max-w-xs">
         <button onClick={() => addMenuDispatch({ type: ACTIONS.nextTab })}>click me if you can</button>
      </div>
   )
}