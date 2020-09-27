import {
  paymentRequest,
  paymentSuccess,
  paymentFailure,
} from "../actions/actions";
import { serverPayment } from "../../api.js";

export const paymentMiddleWare = (store) => (next) => async (action) => {
  console.log("action:", action, "authenticate:", paymentRequest().type);

  if (action.type === paymentRequest().type) {
    console.log("action:", action);
    const { cardNumber, expiryDate, userName, cvcNumber } = action.payload;
    const success = await serverPayment(
      cardNumber,
      expiryDate,
      userName,
      cvcNumber
    );
    if (success) {
      store.dispatch(paymentSuccess());
    } else {
      store.dispatch(paymentFailure());
    }
  } else {
    next(action);
  }
};
