export default (state = false, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return action.payload;
        case "LOGIN_SUCCESS":
            return true;
        case "LOGIN_FAILURE":
            return false;
        case "REGISTRATION_REQUEST":
            return action.payload;
        case "REGISTRATION_SUCCESS":
            return true;
        case "REGISTRATION_FAILURE":
            return false;
        case "LOGOUT_USER":
            debugger;
            return false;

        default:
            return state;
    }
};
