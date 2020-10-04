import React from "react";
import { Logo } from "loft-taxi-mui-theme";
import "./Login.scss";
import { func, bool } from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest } from "./redux/actions/actions";

const propTypes = {
  isLoggedIn: bool,
  registration: func,
};

const Login = ({ isLoggedIn, login }) => {
  const formLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    login(email.value, password.value);
  };
  if (isLoggedIn) return <Redirect to="/map" />;
  return (
    <div className="login__page" data-testid="login">
      <div className="login__container">
        <div className="login__logo">
          <Logo white animated />
        </div>
        <div className="login__row">
          <form className="form" onSubmit={formLogin}>
            <div className="form__title">Войти</div>
            <div className="form__row">
              <div className="form__text">Новый пользователь ?</div>
              <Link to="/" className="form__link" data-testid="regLink">
                Зарегистрируйтесь
              </Link>
            </div>
            <div className="form__row form__row_column">
              <label htmlFor="email">Имя пользователя*</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                required={true}
              ></input>
            </div>
            <div className="form__row form__row_column">
              <label htmlFor="password">Пароль*</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form__input"
                required={true}
              ></input>
            </div>
            <div className="form__row form__row_right">
              <button type="submit" className="form__button">
                Войти
              </button>
            </div>
          </form>
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
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginRequest({ email, password })),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
