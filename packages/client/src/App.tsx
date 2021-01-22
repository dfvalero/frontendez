import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './modules';

export const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/first">First</Link> <Link to="/second">Second</Link>
        </header>
        <br />
        <Switch>
          {routes.map((route) => (
            <Route key={route.name} path={route.path} exact={route.exact} component={route.component} />
          ))}
          <Route path="*">Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
};
