import { useState } from "react";
import SideMenu from '../SideMenu/SideMenu';
import NavBar from '../NavBar/NavBar';
import Router from 'App/Router/Router';

export default function PagesContainerWithNavigation() {
   return (
      <div className="">
         <NavBar />
         <div className="flex">
            <SideMenu />
            <Router />
         </div>
      </div>
   );
}