import React from "react";
import "./Registration.scss";
import { Logo } from "loft-taxi-mui-theme";
import { func } from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registrationRequest } from "./redux/actions/actions";

const propTypes = {
  changePage: func,
};

const Registration = ({ isLoggedIn, registration }) => {
  const registrationSubmit = (e) => {
    e.preventDefault();
    const { name, surname, email, password } = e.target;
    registration(name.value, surname.value, email.value, password.value);
  };

  if (isLoggedIn) return <Redirect to="/map" />;

  return (
    <div className="registration__page" data-testid="Registration">
      <div className="registration__container">
        <div className="registration__logo">
          <Logo white animated />
        </div>
        <div className="registration__row">
          <form className="form" onSubmit={registrationSubmit}>
            <div className="form__title">Регистрация</div>
            <div className="form__row">
              <div className="form__text">Уже зарегистрирован ?</div>
              <Link to="/login" className="form__link">
                Войти
              </Link>
            </div>
            <div className="form__row form__row_column">
              <label htmlFor="email">Адрес электронной почты</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                required={true}
              ></input>
            </div>
            <div className="form__block ">
              <div className="form__row form__row_column">
                <label htmlFor="name">Имя</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="form__input"
                  required={true}
                ></input>
              </div>
              <div className="form__row form__row_column">
                <label htmlFor="surname">Фамилия</label>
                <input
                  type="surname"
                  id="surname"
                  name="surname"
                  className="form__input"
                  required={true}
                ></input>
              </div>
            </div>
            <div className="form__row form__row_column">
              <label htmlFor="password">Пароль</label>
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
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Registration.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registration: (name, surname, email, password) =>
      dispatch(registrationRequest({ name, surname, email, password })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
