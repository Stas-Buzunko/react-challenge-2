import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import rootReducer from './reducers/';
import routes from './routes';
import ReduxPromise from 'redux-promise';

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


ReactDOM.render(
  <Provider store={store}>
    <Router	history={appHistory} routes={routes} />
  </Provider>
, document.getElementById('app'));

