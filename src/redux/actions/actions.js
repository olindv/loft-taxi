export const loginRequest = (payload) => {
  return {
    type: "LOGIN_REQUEST",
    payload,
  };
};
export const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS",
  };
};
export const loginFailure = () => {
  return {
    type: "LOGIN_FAILURE",
  };
};

export const registrationRequest = (payload) => {
  return {
    type: "REGISTRATION_REQUEST",
    payload,
  };
};
export const registrationSuccess = () => {
  return {
    type: "REGISTRATION_SUCCESS",
  };
};
export const registrationFailure = () => {
  return {
    type: "REGISTRATION_FAILURE",
  };
};
export const paymentRequest = (payload) => {
  return {
    type: "PAYMENT_REQUEST",
    payload,
  };
};
export const paymentSuccess = () => {
  return {
    type: "PAYMENT_SUCCESS",
  };
};
export const paymentFailure = () => {
  return {
    type: "PAYMENT_FAILURE",
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
