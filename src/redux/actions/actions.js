export const loginRequest = (payload) => {
  return {
    type: "LOGIN_REQUEST",
    payload,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: "LOGIN_SUCCESS",
    payload,
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
export const registrationSuccess = (payload) => {
  return {
    type: "REGISTRATION_SUCCESS",
    payload,
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
export const paymentSuccess = (payload) => {
  return {
    type: "PAYMENT_SUCCESS",
    payload,
  };
};
export const paymentFailure = () => {
  return {
    type: "PAYMENT_FAILURE",
  };
};

export const paymentGetCardRequest = (payload) => {
  return {
    type: "PAYMENT_GETCARD_REQUEST",
    payload,
  };
};
export const paymentGetCardSuccess = (payload) => {
  return {
    type: "PAYMENT_GETCARD_SUCCESS",
    payload,
  };
};
export const paymentGetCardFailure = () => {
  return {
    type: "PAYMENT_GETCARD_FAILURE",
  };
};

export const addressListFailure = () => {
  return {
    type: "ADDRESSLIST_FAILURE",
  };
};
export const addressListRequest = (payload) => {
  return {
    type: "ADDRESSLIST_REQUEST",
    payload,
  };
};
export const addressListSuccess = (payload) => {
  return {
    type: "ADDRESSLIST_SUCCESS",
    payload,
  };
};

export const routeRequest = (payload) => {
  return {
    type: "ROUTE_REQUEST",
    payload,
  };
};
export const routeSuccess = (payload) => {
  return {
    type: "ROUTE_SUCCESS",
    payload,
  };
};
export const routeFailure = () => {
  return {
    type: "ROUTE_FAILURE",
  };
};

export const logoutUser = (payload) => {
  return {
    type: "LOGOUT_USER",
    payload,
  };
};
