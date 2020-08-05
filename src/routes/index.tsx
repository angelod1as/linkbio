import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Default from '../pages/Default';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Default} />
    </Switch>
  );
};

export default Routes;
