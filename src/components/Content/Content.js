import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Content = ({ routes }) => (
  <div>
    <Switch>
      {routes.map(({ path, isExactCon, component: RouterComponent }) => (
        <Route
          key={path}
          path={path}
          component={RouterComponent}
          exact={isExactCon}
        />
      ))}
    </Switch>
  </div>
);

export default Content;
