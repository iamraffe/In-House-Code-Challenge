import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

if (document !== null && document !== undefined) {
  const appContainer = document.getElementById('app');

  if (appContainer) {
    render(<App />, appContainer);
  }

}
