import { useState } from "react";
import useSetPageAsCurrent from 'App/Router/useSetPageAsCurrent';


export default function MealsPage() {  
  useSetPageAsCurrent('meals');

  return (
    <div>
      Meals
    </div>
  );
}