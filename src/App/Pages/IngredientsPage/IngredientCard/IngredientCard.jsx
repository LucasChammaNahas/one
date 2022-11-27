import { useState } from "react";




export default function IngredientCard(props) {
   const { name, price, calories, proteins, carbs, fats } = props

   return (
      <div class="flex justify-center">
         <div class="p-6 my-4 rounded-lg shadow-lg bg-white w-64">
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Calories: {calories}</p>
            <p>Proteins: {proteins}</p>
            <p>Carbs: {carbs}</p>
            <p>Fats: {fats}</p>

         </div>
      </div>
   );
}
