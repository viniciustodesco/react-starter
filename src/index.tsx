
import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import {configureStore, StoreContext} from './config/Store';

const [store, persistor] = configureStore();

ReactDOM.render(
  <StoreContext.Provider value={store} >
      <PersistGate loading={null} persistor={persistor}>
        <App/>
    </PersistGate>
  </StoreContext.Provider>,
  document.getElementById('root'),
);
