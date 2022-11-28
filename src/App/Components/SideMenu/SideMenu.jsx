import { Link, useLocation } from "react-router-dom";
import { useAppContext } from 'App/StateManagement/useContexts';

export default function SideMenu() {
   const { appState } = useAppContext()
   // const { currentPage } = appState;
   const navState = useLocation().state || {};
   const { currentPage } = navState;
   console.log('--> ', useLocation())

   return (
      <div className="border-4 border-indigo-500">
         <h2>Navigate</h2>
         <Link to="menus" state={{...navState, currentPage: 'menus'}}>
            <p className={`${currentPage === 'menus' ? 'text-green-300' : ''}`}>Menus</p>
         </Link>
         <Link to="meals" state={{...navState, currentPage: 'meals'}}>
            <p className={`${currentPage === 'meals' ? 'text-green-300' : ''}`}>Meals</p>
         </Link>
         <Link to="dishes" state={{...navState, currentPage: 'dishes'}}>
            <p className={`${currentPage === 'dishes' ? 'text-green-300' : ''}`}>Dishes</p>
         </Link>
         <Link to="ingredients" state={{...navState, currentPage: 'ingredients'}}>
            <p className={`${currentPage === 'ingredients' ? 'text-green-300' : ''}`}>Ingredients</p>
         </Link>
      </div>
   );
}

