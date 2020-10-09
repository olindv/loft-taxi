import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetRoute } from "../../api";
import {
  routeSuccess,
  routeFailure,
  routeRequest,
  flagChangeValue,
} from "../actions/actions";

export function* getRouteSaga(action) {
  try {
    const { addressFrom, addressTo } = action.payload;
    const response = yield call(serverGetRoute, addressFrom, addressTo);
    yield put(routeSuccess(response));
    yield put(flagChangeValue({ orderFlag: true }));
  } catch ({ message }) {
    yield put(routeFailure(message));
  }
}

export function* routeSaga() {
  yield takeEvery(routeRequest().type, getRouteSaga);
}
