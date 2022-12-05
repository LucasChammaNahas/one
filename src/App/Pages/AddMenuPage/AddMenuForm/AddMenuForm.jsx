import { AddMenuProvider } from 'App/Context/contextManager';
import AddMenuDaysList from './AddMenuDaysList/AddMenuDaysList';
import AddMenuMainPanel from './AddMenuMainPanel/AddMenuMainPanel';

export default function AddMenuForm() {
   return (
      <AddMenuProvider>
         <div className="flex">
            <AddMenuMainPanel />
            <AddMenuDaysList />
         </div>
      </AddMenuProvider>
   );
}