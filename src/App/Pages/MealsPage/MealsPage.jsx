import { useState } from "react";
import useSetCurrentPage from 'App/Hooks/useSetCurrentPage';


export default function MealsPage() {  
  useSetCurrentPage('meals');
  
  return (
    <div>
      Meals
    </div>
  );
}