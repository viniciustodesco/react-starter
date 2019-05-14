import {createStore, Store} from 'redux';
import reducer from './reducers';
import {create} from 'redux-react-hook';
import {composeWithDevTools} from 'redux-devtools-extension';

import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer, Persistor} from 'redux-persist';
import INITIAL_STATE from './initialState';
import { IState, IAction } from './interfaces';


export function configureStore(): [Store<IState, IAction>, Persistor] {
  const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, reducer);
  let store = createStore(
    persistedReducer,
    INITIAL_STATE as any,
    composeWithDevTools(),
  );
  console.log('store', store.getState());
  store.subscribe(() => {
    console.log(store.getState());
  });
  let persistor = persistStore(store);
  return [store as any, persistor];
}

export const {StoreContext, useDispatch, useMappedState} = create<
  IState,
  IAction,
  Store<IState, IAction>
>();
