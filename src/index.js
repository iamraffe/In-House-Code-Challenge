import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import EditContactPage from './components/EditContactPage';
import FavoritesPage from './components/FavoritesPage';

import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

//Add persistedState as a parameter to configureStore
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
const store = configureStore(persistedState);
//Add listener if any change on the state it will be saved on localStorage
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
          <Route path="/favorites" component={FavoritesPage} />
       </Router>
      </Provider>,
     appContainer
    );
  }

}
