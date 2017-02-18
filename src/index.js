import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

if (document !== null && document !== undefined) {
  const appContainer = document.getElementById('app');

  if (appContainer) {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
     appContainer
    );
  }

}
