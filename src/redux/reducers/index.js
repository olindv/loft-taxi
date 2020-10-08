import { combineReducers } from "redux";
import authReducer from "./authReducer";
import paymentReducer from "./paymentReducer";
import addressReducer from "./addressReducer";
import routeReducer from "./routeReducer";
import flagsReducer from "./flagsReducer";

export default combineReducers({
  auth: authReducer,
  payment: paymentReducer,
  addresses: addressReducer,
  route: routeReducer,
  flags: flagsReducer,
  registration: false,
});
