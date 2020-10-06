import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetRoute } from "../../api";
import { routeSuccess, routeFailure, routeRequest } from "../actions/actions";

export function* getRouteSaga() {
  try {
    const response = yield call(serverGetRoute);
    const { data } = response;
    yield put(routeSuccess(data.addresses));
  } catch ({ message }) {
    yield put(routeFailure(message));
  }
}

export function* routeSaga() {
  yield takeEvery(routeRequest().type, getRouteSaga);
}
