import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import App from './App';
import {persisterMiddleware, getInitialState} from './persister';
import './index.css';

const store = createStore(
  rootReducer,
  getInitialState(),
  applyMiddleware(persisterMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
