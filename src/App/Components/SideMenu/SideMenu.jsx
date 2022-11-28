import { Link } from "react-router-dom";
import { useAppContext } from 'App/StateManagement/useContexts';

export default function SideMenu() {
   const { appState } = useAppContext()
   const { currentPage } = appState;

   return (
      <div className="border-4 border-indigo-500">
         <h2>Navigate</h2>
         <Link to="menus">
            <p className={`${currentPage === 'menus' ? 'text-green-300' : ''}`}>Menus</p>
         </Link>
         <Link to="meals">
            <p>Meals</p>
         </Link>
         <Link to="dishes">
            <p>Dishes</p>
         </Link>
         <Link to="ingredients">
            <p>Ingredients</p>
         </Link>
      </div>
   );
}

