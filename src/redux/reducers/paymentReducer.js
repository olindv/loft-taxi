export default (state = false, action) => {
  switch (action.type) {
    case "PAYMENT_REQUEST":
      return action.payload;
    case "PAYMENT_SUCCESS":
      return true;
    case "PAYMENT_FAILURE":
      return false;
    default:
      return state;
  }
};
