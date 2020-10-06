import { takeEvery, call, put } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  registrationRequest,
  registrationSuccess,
  logoutUser,
} from "../actions/actions";
import { serverLogin, serverRegistration } from "../../api";

export function* loginSaga(action) {
  const { email, password } = action.payload;
  const [success, token] = yield call(serverLogin, email, password);
  if (success) {
    yield put(loginSuccess(token));
    yield window.localStorage.setItem("token", token);
  }
}

export function* registrationSaga(action) {
  const { name, surname, email, password } = action.payload;
  const [success, token] = yield call(
    serverRegistration,
    name,
    surname,
    email,
    password
  );
  if (success) {
    yield put(registrationSuccess(token));
    yield window.localStorage.setItem("token", token);
  }
}

export function* logoutSaga() {
  yield window.localStorage.removeItem("token");
}

export function* authSagas() {
  yield takeEvery(loginRequest().type, loginSaga);
  yield takeEvery(registrationRequest().type, registrationSaga);
  yield takeEvery(logoutUser().type, logoutSaga);
}
