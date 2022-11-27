import { useState } from "react";

export default function NavBar() {  
  return (
    <div className="flex bg-indigo-600 w-full justify-center gap-3">
      <h2>Navigate</h2>
      <p>Menus</p>
      <p>Meals</p>
      <p>Dishes</p>
      <p>Ingredients</p>
    </div>
  );
}