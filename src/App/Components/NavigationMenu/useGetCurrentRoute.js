import { useLocation, useMatches } from 'react-router-dom';

const appRoutes = [
   'menus',
   'meals',
   'dishes',
   'ingredients',
]

export default function useGetCurrentRoute() {
   const location = useLocation();

   // for (const route of appRoutes) {
   //    if(location.startsWith(route)){
   //       return route
   //    }
   // }
   return location;
}
