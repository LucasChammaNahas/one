import { useState } from "react";
import AddMenuForm from './AddMenuForm/AddMenuForm';
import useSetPageAsCurrent from 'App/Router/useSetPageAsCurrent';

export default function AddMenuPage() {  
  useSetPageAsCurrent('addMenu');
  return (
    <div>
      <AddMenuForm />
    </div>
  );
}