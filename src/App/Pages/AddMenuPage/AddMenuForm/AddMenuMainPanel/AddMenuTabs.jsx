import { useAddMenuContext } from 'App/Context/contextManager';
import { ACTIONS } from 'App/Reducers/useAddMenuReducer';

const tabs = [
   'Breakfast',
   'Morning Snack',
   'Lunch',
   'Afternoon Snack',
   'Dinner',
   'Evening Snack',
   'Summary'
];

export default function AddMenuTabs() {
   const { addMenuState, addMenuDispatch } = useAddMenuContext();
   const { activeTab } = addMenuState;

   console.log('--> ', activeTab)

   const setTab = (payload) => {
      addMenuDispatch({ type: ACTIONS.activeTab, payload });
   };


   return (
      <div className="tabs tabs-boxed">
         {tabs.map((tab) => {
            const activeStyle = tab === activeTab ? 'tab-active' : '';
            return (
               <button
                  key={tab}
                  className={`tab ${activeStyle}`}
                  onClick={() => setTab(tab)}
               >
                  {tab}
               </button>
            )
         })}
      </div>
   );
}