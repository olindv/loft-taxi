import { takeEvery, call, put, select } from "redux-saga/effects";
import {
  paymentRequest,
  paymentSuccess,
  paymentGetCardRequest,
  paymentGetCardSuccess,
  paymentGetCardFailure,
  paymentFailure,
  flagChangeValue,
} from "../actions/actions";
import { serverPayment, serverGetCard } from "../../api";

export function* paymentSetSaga() {
  try {
    const root = yield select();
    const { cardNumber, expiryDate, cardName, cvc } = root.payment;
    const { token } = root.auth;
    const response = yield call(serverPayment, {
      cardNumber,
      expiryDate,
      cardName,
      cvc,
      token,
    });
    if (response) {
      yield put(paymentSuccess());
      yield put(flagChangeValue({ paymentFlag: true }));
    } else {
      yield put(paymentFailure());
    }
  } catch (error) {
    yield put(paymentFailure());
  }
}

export function* paymentGetSaga() {
  try {
    const root = yield select();
    const { token } = root.auth;
    const response = yield call(serverGetCard, token);

    if (response && !response.error) {
      yield put(paymentGetCardSuccess(response));
      yield put(flagChangeValue({ paymentFlag: true }));
    } else {
      yield put(paymentGetCardFailure());
    }
  } catch (error) {
    yield put(paymentGetCardFailure());
  }
}

export function* paymentSagas() {
  yield takeEvery(paymentRequest().type, paymentSetSaga);
  yield takeEvery(paymentGetCardRequest().type, paymentGetSaga);
}
