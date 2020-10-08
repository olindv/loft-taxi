const initialState = {
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PAYMENT_REQUEST":
      return state;
    case "PAYMENT_SUCCESS":
      return state;
    case "PAYMENT_FAILURE":
      return state;
    case "PAYMENT_GETCARD_REQUEST":
      return { ...initialState };
    case "PAYMENT_GETCARD_SUCCESS":
      return { ...state, ...action.payload };
    case "PAYMENT_CHANGE_FIELD":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
