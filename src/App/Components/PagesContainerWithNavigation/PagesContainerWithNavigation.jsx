import { useState, useContext } from "react";
import SideMenu from '../SideMenu/SideMenu';
import NavBar from '../NavBar/NavBar';
import Router from 'App/Router/Router';
import { AppContext } from 'App/StateManagement/useContexts';

export default function PagesContainerWithNavigation() {
   const con = useContext(AppContext);

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