import { withAddMenuProvider } from './ComponentInterface/componentInterface';
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