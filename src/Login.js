import React from "react";
import {Logo} from 'loft-taxi-mui-theme';
import "./Login.scss";

const Login = ({ changePage }) => {
  return (

    <div className="login__page">
      <div className="login__container">
        <div className="login__logo">
          <Logo/>
        </div>
        <div className="login__row">
          <h2 className="login__title">Страница Логина</h2>
          <form className="form">
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
          <label htmlFor="login">Имя пользователя*</label>
          <input
            type="text"
            id="login"
            name="name"
            className="form__input"
          ></input>
        </div>
        <div className="form__row">
          <label htmlFor="password">Пароль*</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form__input"
          ></input>
        </div>
        <div className="form__row">
          <button className="form__button" onClick={changePage} name="map">
            Войти
          </button>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
