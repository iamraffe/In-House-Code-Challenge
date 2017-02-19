import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import EditContactPage from './components/EditContactPage';

import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = configureStore(persistedState);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

if (document !== null && document !== undefined) {
  const appContainer = document.getElementById('app');

  if (appContainer) {
    render(
      <Provider store={store}>
       <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/contact/:id" component={EditContactPage} />
       </Router>
      </Provider>,
     appContainer
    );
  }

}
