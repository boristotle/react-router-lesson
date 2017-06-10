import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavComponent from './NavComponent';
import HomeComponent from './HomeComponent';
import PuppiesComponent from './PuppiesComponent';


ReactDOM.render(
  <Router>
  <div>
    <NavComponent />
    <Switch>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/puppies" exact component={PuppiesComponent} />
    </Switch>
  </div>
  </Router>,
  document.getElementById('root')
);
