import {
  paymentRequest,
  paymentSuccess,
  paymentFailure,
} from "../actions/actions";
import { serverPayment } from "../../api.js";

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
  } else {
    next(action);
  }
};
