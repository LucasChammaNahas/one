import { useState } from "react";
import useSetPageAsCurrent from 'App/Hooks/useSetPageAsCurrent';


export default function MealsPage() {  
  useSetPageAsCurrent('meals');

  return (
    <div>
      Meals
    </div>
  );
}