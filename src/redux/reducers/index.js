import { combineReducers } from "redux";
import authReducer from "./authReducer";
import paymentReducer from "./paymentReducer";
import addressReducer from "./addressReducer";
import routeReducer from "./routeReducer";

export default combineReducers({
  auth: authReducer,
  payment: paymentReducer,
  addresses: addressReducer,
  route: routeReducer,
  registration: false,
});
