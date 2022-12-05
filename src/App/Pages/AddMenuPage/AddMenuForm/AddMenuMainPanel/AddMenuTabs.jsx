import { useState } from 'react'

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
   const [whichMeal, setWhichMeal] = useState(tabs[0])

   return (
      <div className="tabs tabs-boxed">
         {tabs.map((tab) => {
            const activeStyle = tab === whichMeal ? 'tab-active' : '';
            return (
               <button
                  className={`tab ${activeStyle}`}
                  onClick={() => setWhichMeal(tab)}
               >
                  {tab}
               </button>
            )
         })}
      </div>
   );
}