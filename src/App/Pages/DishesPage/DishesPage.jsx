import { useState } from "react";
import useSetPageAsCurrent from 'App/Router/useSetPageAsCurrent';

export default function DishesPage() {  
  useSetPageAsCurrent('dishes');
  return (
    <div>
      Dishes
    </div>
  );
}