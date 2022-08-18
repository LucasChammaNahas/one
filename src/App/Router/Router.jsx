import React from 'react';
import { HashRouter as BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Groups from '../Pages/Groups';
import Bills from '../Pages/Bills';
import AddBill from '../Pages/AddBill';
import People from '../Pages/People';
import Settings from '../Pages/Settings';
import SettleUp from '../Pages/SettleUp';
import AddPerson from '../Containers/AddPerson';
import Z from '../Pages/Z/Z';

 const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/groups"    component={ Groups } />
        <Route exact path="/bills"     component={ Bills } />
        <Route exact path="/people"    component={ People } />
        <Route exact path="/add-bill"  component={ AddBill } />
        <Route exact path="/settings"  component={ Settings } />
        <Route exact path="/settle-up" component={ SettleUp } />
        <Route exact path="/z"         component={ Z } />
        <Redirect to="/bills" />
      </Switch>
    </BrowserRouter>
  );

  export default Routes;
