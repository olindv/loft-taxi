const paymentDetail = {
  cardNumber: "",
  expiryDate: "",
  userName: "",
  cvcNumber: "",
  token: "",
};

export default (state = paymentDetail, action) => {
  switch (action.type) {
    case "PAYMENT_REQUEST":
      return action.payload;
    case "PAYMENT_SUCCESS":
      return action.payload;
    case "PAYMENT_FAILURE":
      return paymentDetail;
    case "PAYMENT_GETCARD_REQUEST":
      return action.payload;
    case "PAYMENT_GETCARD_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
