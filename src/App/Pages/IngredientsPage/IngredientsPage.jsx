import { useState } from "react";
import IngredientsList from './IngredientsList/IngredientsList';


export default function IngredientsPage() {  
  return (
    <div>
      Ingredients
      <IngredientsList />
    </div>
  );
}