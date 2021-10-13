import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function Root() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  );
}

export default Root;
