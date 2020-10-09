import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers";
import createSagaMiddleWare from "redux-saga";
import { hadleSagas } from "./redux/sagas/sagas";

const sagaMiddleWare = createSagaMiddleWare();

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleWare),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );

  sagaMiddleWare.run(hadleSagas);
  return store;
};

export default createAppStore;
