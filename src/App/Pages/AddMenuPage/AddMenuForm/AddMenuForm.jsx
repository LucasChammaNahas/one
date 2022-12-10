import { withAddMenuProvider } from './InternalAPI/internalAPI';
import AddMenuDaysList from './AddMenuDaysList/AddMenuDaysList';
import AddMenuMainPanel from './AddMenuMainPanel/AddMenuMainPanel';

function AddMenuForm() {
   return (
      <div className="flex">
         <AddMenuMainPanel />
         <AddMenuDaysList />
      </div>
   );
}

export default withAddMenuProvider(AddMenuForm)