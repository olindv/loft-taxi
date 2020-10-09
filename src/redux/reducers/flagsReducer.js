const initialState = { paymentFlag: false, orderFlag: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case "FLAG_CHANGE_VALUE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
