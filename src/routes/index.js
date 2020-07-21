import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Scheduled from '../pages/Scheduled';
import Posted from '../pages/Posted';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/scheduled" component={Scheduled} isPrivate />
      <Route path="/posted" component={Posted} isPrivate />
    </Switch>
  );
}
