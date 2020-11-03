import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);