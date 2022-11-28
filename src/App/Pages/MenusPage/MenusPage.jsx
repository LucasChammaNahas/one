import { useState, useEffect } from "react";
import useSetPageAsCurrent from 'App/Router/useSetPageAsCurrent';

export default function MenusPage() {
  useSetPageAsCurrent('menus');

  return (
    <div>
      Menus
    </div>
  );
}