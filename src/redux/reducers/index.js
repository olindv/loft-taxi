import { combineReducers } from "redux";
import authReducer from "./authReducer";
import paymentReducer from "./paymentReducer";

export default combineReducers({
  auth: authReducer,
  payment: paymentReducer,
  registration: false,
});
