import { useState, useEffect } from "react";
import useSetPageAsCurrent from 'App/Hooks/useSetPageAsCurrent';

export default function MenusPage() {
  useSetPageAsCurrent('menus');

  return (
    <div>
      Menus
    </div>
  );
}