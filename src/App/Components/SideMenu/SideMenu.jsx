import { Link, useLocation } from "react-router-dom";

export default function SideMenu() {
   const currentPage = useLocation()?.state?.currentPage;
   console.log('--> ', useLocation())

   return (
      <div className="border-4 border-indigo-500">
         <h2>Navigate</h2>
         <Link to="menus">
            <p className={`${currentPage === 'menus' ? 'text-green-300' : ''}`}>Menus</p>
         </Link>
         <Link to="meals">
            <p className={`${currentPage === 'meals' ? 'text-green-300' : ''}`}>Meals</p>
         </Link>
         <Link to="dishes">
            <p className={`${currentPage === 'dishes' ? 'text-green-300' : ''}`}>Dishes</p>
         </Link>
         <Link to="ingredients">
            <p className={`${currentPage === 'ingredients' ? 'text-green-300' : ''}`}>Ingredients</p>
         </Link>
      </div>
   );
}

