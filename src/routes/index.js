import React from 'react';
import { 
  Switch, 
  // Route 
} from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Tarefas from '../pages/Tarefas';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/tarefas" component={Tarefas} isPrivate />
  </Switch>
);

export default Routes;