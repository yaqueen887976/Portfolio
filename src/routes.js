import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './containers/App'
import Home from './containers/Home'
import Hobby from './containers/Hobby'
import Writing from './containers/Writing'
import Contact from './containers/Contact'

export default (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/hobby' component={Hobby} />
        <Route path='/writing' component={Writing} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>

);