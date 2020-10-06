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
    const { data } = response;
    yield put(addressListSuccess(data.addresses));
  } catch ({ message }) {
    yield put(addressListFailure(message));
  }
}

export function* addressListSaga() {
  yield takeEvery(addressListRequest().type, getAddressesSaga);
}
