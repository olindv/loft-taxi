import {
  paymentRequest,
  paymentSuccess,
  paymentFailure,
  paymentGetCardRequest,
  paymentGetCardSuccess,
  paymentGetCardFailure,
} from "../actions/actions";
import { serverPayment, serverGetCard } from "../../api.js";

export const paymentMiddleWare = (store) => (next) => async (action) => {
  if (action.type === paymentRequest().type) {
    const { cardNumber, expiryDate, userName, cvcNumber } = action.payload;
    const success = await serverPayment(
      cardNumber,
      expiryDate,
      userName,
      cvcNumber
    );
    if (success) {
      store.dispatch(
        paymentSuccess(cardNumber, expiryDate, userName, cvcNumber)
      );
    } else {
      store.dispatch(paymentFailure());
    }
  } else if (action.type === paymentGetCardRequest().type) {
    const { cardNumber, expiryDate, userName, cvcNumber } = action.payload;
    const success = await serverGetCard(
      cardNumber,
      expiryDate,
      userName,
      cvcNumber
    );
    console.log("paymentGetCardRequest");
    if (success) {
      store.dispatch(
        paymentGetCardSuccess(cardNumber, expiryDate, userName, cvcNumber)
      );
    } else {
      store.dispatch(paymentGetCardFailure());
    }
  } else {
    next(action);
  }
};
