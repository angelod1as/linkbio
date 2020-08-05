import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Default from '../pages/Default';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Default} />
    </Switch>
  );
};

export default Routes;
