const coordsDetail = null;

export default (state = coordsDetail, action) => {
  switch (action.type) {
    case "ROUTE_REQUEST":
      return null;
    case "ROUTE_SUCCESS":
      return action.payload;
    case "ROUTE_FAILURE":
      return state;
    default:
      return state;
  }
};
