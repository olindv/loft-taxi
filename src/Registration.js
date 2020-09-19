import React, { useState } from "react";
import "./Registration.scss";
import { Logo } from "loft-taxi-mui-theme";
import { func } from "prop-types";

const propTypes = {
  changePage: func,
};

const Registration = ({ changePage }) => {
  const [value, setValue] = useState({
    email: "",
    name: "",
    secondName: "",
    password: "",
  });

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <div className="registration__page">
      <div className="registration__container">
        <div className="registration__logo">
          <Logo white animated />
        </div>
        <div className="registration__row">
          <h2 className="registration__title">Страница Регистрации</h2>
          <form className="form">
            <div className="form__title">Регистрация</div>
            <div className="form__row">
              <div className="form__text">Уже зарегистрирован ?</div>
              <button className="form__link" name="login" onClick={changePage}>
                Войти
              </button>
            </div>
            <div className="form__row">
              <label htmlFor="email">Адрес электронной почты</label>
              <input
                type="email"
                id="email"
                name="email"
                value={value.email}
                onChange={handleChange}
                className="form__input"
              ></input>
            </div>
            <div className="form__block">
              <div className="form__row">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={value.name}
                  onChange={handleChange}
                  className="form__input"
                ></input>
              </div>
              <div className="form__row">
                <label htmlFor="secondName">Фамилия</label>
                <input
                  type="text"
                  id="secondName"
                  name="secondName"
                  value={value.secondName}
                  onChange={handleChange}
                  className="form__input"
                ></input>
              </div>
            </div>
            <div className="form__row">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                name="password"
                value={value.password}
                onChange={handleChange}
                className="form__input"
              ></input>
            </div>
            <div className="form__row">
              <button className="form__button" name="map" onClick={changePage}>
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

export default Registration;
