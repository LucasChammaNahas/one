import { useState, useContext } from "react";
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import NavBar from '../NavBar/NavBar';
import Router from 'App/Router/Router';
import { AppContext } from 'App/StateManagement/useContexts';

export default function PagesContainerWithNavigation() {
   const con = useContext(AppContext);

   return (
      <div className="">
         <NavBar />
         <div className="flex">
            <NavigationMenu />
            <Router />
         </div>
      </div>
   );
}