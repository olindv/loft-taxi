import React, { useEffect } from "react";
import { Logo } from "loft-taxi-mui-theme";
import "./Login.scss";
import { func, bool } from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { LoginForm } from "./LoginForm";

const propTypes = {
    isLoggedIn: bool,
    registration: func,
};

const Login = ({ isLoggedIn }) => {
    const history = useHistory();
    useEffect(() => {
        if (isLoggedIn) {
            history.push("/map");
        }
    }, [history, isLoggedIn]);
    return (
        <div className="login__page" data-testid="login">
            <div className="login__container">
                <div className="login__logo">
                    <Logo white animated />
                </div>
                <div className="login__row">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

Login.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

export default connect(mapStateToProps, null)(Login);
