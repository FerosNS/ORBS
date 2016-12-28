import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ORBS from './components/orbs';
import SuggestedComponent from './components/modules/options/suggested';
import WorldsComponent from './components/modules/options/worlds';
import LoginComponent from './components/modules/user/login';
import SignupComponent from './components/modules/user/signup';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
      <Router history={ browserHistory }>
        <Route path='/' component={ ORBS }>
            <IndexRoute component={ SuggestedComponent } />
            <Route path='worlds' component={ WorldsComponent } />
        </Route>
        <Route path='/login' component={ LoginComponent } />
        <Route path='/signup' component={ SignupComponent } />
      </Router>
  </Provider>
  , document.getElementById('orbs-app-container')
);
