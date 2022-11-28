import { Routes, Route, Navigate } from "react-router-dom";
import DishesPage from 'App/Pages/DishesPage/DishesPage';
import IngredientsPage from 'App/Pages/IngredientsPage/IngredientsPage';
import MealsPage from 'App/Pages/MealsPage/MealsPage';
import MenusPage from 'App/Pages/MenusPage/MenusPage';

export default function Router() {
   return (
      <Routes>
         <Route path="menus" element={<MenusPage />} />
         <Route path="meals/*" element={<MealsPage />} />
         <Route path="dishes/*" element={<DishesPage />} />
         <Route path="ingredients/*" element={<IngredientsPage />} />
         <Route path="*" element={<Navigate to="menus" />} />
      </Routes>
   );
}
