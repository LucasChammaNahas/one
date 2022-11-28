import { useState } from "react";
import useSetPageAsCurrent from 'App/Hooks/useSetPageAsCurrent';

export default function DishesPage() {  
  useSetPageAsCurrent('dishes');
  return (
    <div>
      Dishes
    </div>
  );
}