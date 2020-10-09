import { fork } from "redux-saga/effects";
import { authSagas } from "./authSaga";
import { regSagas } from "./registrationSaga";
import { paymentSagas } from "./paymentSaga";
import { addressListSaga } from "./addressListSaga";
import { routeSaga } from "./routeSaga";

export function* hadleSagas() {
  yield fork(authSagas);
  yield fork(regSagas);
  yield fork(paymentSagas);
  yield fork(addressListSaga);
  yield fork(routeSaga);
}
