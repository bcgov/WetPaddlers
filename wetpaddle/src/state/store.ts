import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { createLogger } from 'redux-logger';

export function setupStore(reducer: any, saga: any) {
  const sagaMiddleware = createSagaMiddleware();

  const logger = createLogger({
    level: "log",
    collapsed: true,
    duration: true,
    timestamp: true,
    logErrors: true,
    diff: true,
    diffPredicate: (getState, action) => true
  }
  );

  const store = configureStore({
    reducer: reducer,
    middleware: [sagaMiddleware, logger],
  });
  sagaMiddleware.run(saga);
  return store;
}

export const DefaultStore = setupStore(rootReducer, rootSaga);
