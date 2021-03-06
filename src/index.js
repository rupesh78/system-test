import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const persistCofig= {
  key:'root',
  storage
}

const persistedReducer = persistReducer(persistCofig, reducer)

const store = createStore(persistedReducer,applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
