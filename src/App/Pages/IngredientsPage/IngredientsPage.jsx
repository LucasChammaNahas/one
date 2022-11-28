import { useState } from "react";
import IngredientsList from './IngredientsList/IngredientsList';
import useSetPageAsCurrent from 'App/Hooks/useSetPageAsCurrent';


export default function IngredientsPage() {  
  useSetPageAsCurrent('ingredients');
  return (
    <div>
      Ingredients
      <IngredientsList />
    </div>
  );
}