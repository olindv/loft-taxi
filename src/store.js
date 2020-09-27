import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers";
import { authMiddleWare } from "./redux/middleWares/authMiddleWare";
import { paymentMiddleWare } from "./redux/middleWares/paymentMiddleWare";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(authMiddleWare),
      applyMiddleware(paymentMiddleWare),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );
  return store;
};

export default createAppStore;
