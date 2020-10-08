import { takeEvery, call, put } from "redux-saga/effects";
import { loginRequest, loginSuccess, logoutUser } from "../actions/actions";
import { serverLogin } from "../../api";

export function* loginSaga(action) {
  const { email, password } = action.payload;
  const [success, token] = yield call(serverLogin, email, password);
  if (success) {
    yield put(loginSuccess(token));
    yield window.localStorage.setItem("token", token);
  }
}

export function* logoutSaga() {
  yield window.localStorage.removeItem("token");
}

export function* authSagas() {
  yield takeEvery(loginRequest().type, loginSaga);
  yield takeEvery(logoutUser().type, logoutSaga);
}
