import React, { useState, useContext } from "react";
import { Logo } from "loft-taxi-mui-theme";
import "./Login.scss";
import { func } from "prop-types";
import { AuthContext } from "./App";

const propTypes = {
  changePage: func,
};

const Login = ({ changePage }) => {
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });

  const auth = useContext(AuthContext);
  const formLogin = (e) => {
    e.preventDefault();
    auth.login(inputValues.email, inputValues.password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValues, [name]: value });
  };

  return (
    <div className="login__page">
      <div className="login__container">
        <div className="login__logo">
          <Logo white animated />
        </div>
        <div className="login__row">
          <h2 className="login__title">Страница Логина</h2>
          <form className="form" onSubmit={formLogin}>
            <div className="form__title">Войти</div>
            <div className="form__row">
              <div className="form__text">Новый пользователь ?</div>
              <button
                onClick={changePage}
                name="registration"
                className="form__link"
              >
                Зарегистрируйтесь
              </button>
            </div>
            <div className="form__row">
              <label htmlFor="email">Имя пользователя*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputValues.email}
                onChange={handleChange}
                className="form__input"
              ></input>
            </div>
            <div className="form__row">
              <label htmlFor="password">Пароль*</label>
              <input
                type="password"
                id="password"
                name="password"
                value={inputValues.password}
                onChange={handleChange}
                className="form__input"
              ></input>
            </div>
            <div className="form__row">
              <button className="form__button">Войти</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = propTypes;

export default Login;
