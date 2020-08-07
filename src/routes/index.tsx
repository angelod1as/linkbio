import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Default from '../pages/Default';

const Routes = () => {
  return (
    <Switch>
      <Route path="/:lang" component={Default} />
      <Redirect from="/" to="/en" />
    </Switch>
  );
};

export default Routes;
