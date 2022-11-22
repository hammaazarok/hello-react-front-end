// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App.js';
import store from './store/store.js';

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
