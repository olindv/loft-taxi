import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetAddressList } from "../../api";
import {
  addressListRequest,
  addressListSuccess,
  addressListFailure,
} from "../actions/actions";

export function* getAddressesSaga() {
  try {
    const response = yield call(serverGetAddressList);
    yield put(addressListSuccess(response.addresses));
  } catch ({ message, data }) {
    yield put(addressListFailure(message));
  }
}

export function* addressListSaga() {
  yield takeEvery(addressListRequest().type, getAddressesSaga);
}
