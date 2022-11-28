import { useState, useEffect } from "react";
import useSetCurrentPage from 'App/Hooks/useSetCurrentPage';

export default function MenusPage() {
  useSetCurrentPage('menus');

  return (
    <div>
      Menus
    </div>
  );
}