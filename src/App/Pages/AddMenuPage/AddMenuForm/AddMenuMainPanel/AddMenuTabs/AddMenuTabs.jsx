import { useEffect } from 'react';
import { useAddMenuContext } from '../../ComponentInterface/componentInterface';
import { ACTIONS } from 'App/Reducers/useAddMenuReducer/useAddMenuReducer';
import { tabs } from './addMenuTabsConstants';

export default function AddMenuTabs() {
   const [addMenuState, addMenuDispatch] = useAddMenuContext();
   const { activeTab } = addMenuState;

   useEffect(() => {
      if (activeTab === undefined) setTab(tabs[0])
   }, []); //eslint-disable-line

   function setTab(payload) {
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