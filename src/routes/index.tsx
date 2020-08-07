import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Default from '../pages/Default';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Default} />
      <Route path="/:lang" component={Default} />
    </Switch>
  );
};

export default Routes;
