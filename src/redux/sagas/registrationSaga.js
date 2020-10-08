import { takeEvery, call, put } from "redux-saga/effects";
import { registrationRequest, registrationSuccess } from "../actions/actions";
import { serverRegistration } from "../../api";

export function* registrationSaga(action) {
  debugger;
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
    window.localStorage.setItem("token", token);
  }
}

export function* regSagas() {
  yield takeEvery(registrationRequest().type, registrationSaga);
}
