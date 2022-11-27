import { useState } from "react";
import SideMenu from '../SideMenu/SideMenu';
import NavBar from '../NavBar/NavBar';

export default function PagesContainerWithNavigation() {
   return (
      <div className="">
         <NavBar />
         <div className="flex">
            <SideMenu />
            PagesContainerWithNavigation
         </div>
      </div>
   );
}