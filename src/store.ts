import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer as reducers } from './reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AppState } from 'types';

const thunk = reduxThunk.withExtraArgument({});

const saveState = (appState: AppState) => {
  const state = {
    ...appState,
  };

  try {
    localStorage.setItem("state", JSON.stringify(state));
    localStorage.setItem('currentStoreVersion', '1');
    return undefined;
  } catch (e) {
    return undefined;
  }
};

export const loadState = () => {
  try {
    const state = localStorage.getItem("state");
    if (state === null) {
      return undefined;
    }

    const currentStoreVersion = localStorage.getItem('currentStoreVersion');
    if (currentStoreVersion !== '1') {
      return undefined;
    }

    return { ...JSON.parse(state) };
  } catch (e) {
    return undefined;
  }
};


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers)
const middlewareByEnv: any = {
  development: () => [thunk, createLogger()],
  production: () => [thunk]
};

const middleware = middlewareByEnv[process.env.NODE_ENV]();
export const store = createStore(persistedReducer, loadState(), applyMiddleware(...middleware));

store.subscribe(() => {
  saveState(store.getState());
});


