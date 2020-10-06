import { takeEvery, call, put } from "redux-saga/effects";
import {
  paymentRequest,
  paymentSuccess,
  paymentGetCardRequest,
  paymentGetCardSuccess,
} from "../actions/actions";
import { serverPayment, serverGetCard } from "../../api";

export function* paymentSetSaga(action) {
  const { cardNumber, expiryDate, userName, cvcNumber } = action.payload;
  const success = yield call(
    serverPayment,
    cardNumber,
    expiryDate,
    userName,
    cvcNumber
  );
  if (success) {
    yield put(paymentSuccess(cardNumber, expiryDate, userName, cvcNumber));
  }
}

export function* paymentGetSaga(action) {
  const { cardNumber, expiryDate, userName, cvcNumber, token } = action.payload;
  const success = yield call(
    serverGetCard,
    cardNumber,
    expiryDate,
    userName,
    cvcNumber,
    token
  );
  if (success) {
    yield put(
      paymentGetCardSuccess(cardNumber, expiryDate, userName, cvcNumber, token)
    );
  }
}

export function* paymentSagas() {
  yield takeEvery(paymentRequest().type, paymentSetSaga);
  yield takeEvery(paymentGetCardRequest().type, paymentGetSaga);
}
