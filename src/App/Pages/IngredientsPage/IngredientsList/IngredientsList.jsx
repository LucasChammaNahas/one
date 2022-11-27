import { useState } from "react";
import IngredientCard from '../IngredientCard/IngredientCard';
import { ingredients } from './ingredientsMock';


export default function IngredientsList() {

   return (
      <div>
         {ingredients.map((ingredient) => <IngredientCard {...ingredient} />)}
      </div>
   );
}

