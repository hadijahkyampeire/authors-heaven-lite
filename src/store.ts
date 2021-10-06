import { createStore, applyMiddleware, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer as reducers } from './reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AppState } from 'types';

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

export const store = createStore(
  persistedReducer, 
  loadState(), 
  process.env.NODE_ENV === "production"
    ? applyMiddleware(reduxThunk)
    : applyMiddleware(reduxThunk, createLogger())
);

store.subscribe(() => {
  saveState(store.getState());
});

declare global {
  interface Window {
    store: Store;
  }
}

if ("Cypress" in window) {
  window.store = store;
}