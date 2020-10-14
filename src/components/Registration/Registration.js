import React, { useEffect } from "react";
import "./Registration.scss";
import { Logo } from "loft-taxi-mui-theme";
import { bool, func } from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { RegistrationForm } from "./RegistrationForm";

const propTypes = {
    isLoggedIn: bool,
    registration: func,
};

const Registration = ({ isLoggedIn }) => {
    const history = useHistory();
    useEffect(() => {
        if (isLoggedIn) {
            history.push("/map");
        }
    }, [history, isLoggedIn]);
    return (
        <div className="registration__page" data-testid="registration">
            <div className="registration__container">
                <div className="registration__logo">
                    <Logo white animated />
                </div>
                <div className="registration__row">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    );
};

Registration.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

export default connect(mapStateToProps, null)(Registration);
