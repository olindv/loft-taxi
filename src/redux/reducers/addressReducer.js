const addressDetail = [];

export default (state = addressDetail, action) => {
  switch (action.type) {
    case "ADDRESSLIST_REQUEST":
      return state;
    case "ADDRESSLIST_SUCCESS":
      return action.payload;
    case "ADDRESSLIST_FAILURE":
      return state;
    default:
      return state;
  }
};
