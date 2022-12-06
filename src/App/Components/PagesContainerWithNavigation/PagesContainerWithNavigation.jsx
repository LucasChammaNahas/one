import NavigationMenu from '../NavigationMenu/NavigationMenu';
import NavBar from '../NavBar/NavBar';
import Router from 'App/Router/Router';
import { AddMenuProvider } from 'App/Context/contextManager';

export default function PagesContainerWithNavigation() {

   return (
      <div className="">
         <NavBar />
         <div className="flex">
            <NavigationMenu />
            <AddMenuProvider>
               <Router />
            </AddMenuProvider>
         </div>
      </div>
   );
}