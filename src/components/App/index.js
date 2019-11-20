import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import HomePage from '../Home';
import AnotherPage from '../AnotherPage';
import Navigation from '../Navigation';



const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ANOTHER_PAGE} component={AnotherPage} />
    </div>
  </Router>
);

export default App;