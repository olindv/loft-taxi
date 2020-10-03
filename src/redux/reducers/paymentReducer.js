const paymentDetail = {
  cardNumber: "",
  expiryDate: "",
  userName: "",
  cvcNumber: "",
};

export default (state = paymentDetail, action) => {
  switch (action.type) {
    case "PAYMENT_REQUEST":
      return action.payload;
    case "PAYMENT_SUCCESS":
      return action.payload;
    case "PAYMENT_FAILURE":
      return paymentDetail;
    default:
      return state;
  }
};
