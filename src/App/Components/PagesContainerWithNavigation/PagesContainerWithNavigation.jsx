import NavigationMenu from '../NavigationMenu/NavigationMenu';
import NavBar from '../NavBar/NavBar';
import Router from 'App/Router/Router';

export default function PagesContainerWithNavigation() {

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