import { useState } from "react";
import AddMenuWeeksList from './AddMenuWeeksList/AddMenuWeeksList';
import AddMenuInputsCard from './AddMenuInputsCard/AddMenuInputsCard';

export default function AddMenuForm() {  
  return (
    <div className="flex">
      <AddMenuWeeksList />
      <AddMenuInputsCard />
    </div>
  );
}