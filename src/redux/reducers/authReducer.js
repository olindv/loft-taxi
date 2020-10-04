const initialState = { isLoggedIn: false, token: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return action.payload;
    case "LOGIN_SUCCESS":
      return { isLoggedIn: true, token: action.payload };
    case "LOGIN_FAILURE":
      return { isLoggedIn: false };

    case "REGISTRATION_REQUEST":
      return action.payload;
    case "REGISTRATION_SUCCESS":
      return { isLoggedIn: true, token: action.payload };
    case "REGISTRATION_FAILURE":
      return { isLoggedIn: false };

    case "LOGOUT_USER":
      return { isLoggedIn: false, token: null };

    default:
      return state;
  }
};
