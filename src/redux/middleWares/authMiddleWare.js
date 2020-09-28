import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  logoutUser,
} from "../actions/actions";
import { serverLogin, serverRegistration } from "../../api.js";

export const authMiddleWare = (store) => (next) => async (action) => {
  if (action.type === loginRequest().type) {
    console.log("action:", action);
    const { email, password } = action.payload;
    const [success, token] = await serverLogin(email, password);
    if (success) {
      store.dispatch(loginSuccess());
      window.localStorage.setItem("token", token);
    } else {
      store.dispatch(loginFailure());
    }
  } else if (action.type === registrationRequest().type) {
    const { name, surname, email, password } = action.payload;
    const [success, token] = await serverRegistration(
      name,
      surname,
      email,
      password
    );
    if (success) {
      store.dispatch(registrationSuccess());
      window.localStorage.setItem("token", token);
    } else {
      store.dispatch(registrationFailure());
    }
  } else if (action.type === logoutUser().type) {
    console.log("action:", action, store.getState());
    window.localStorage.removeItem("token");
    next(action);
  } else {
    next(action);
  }
};
