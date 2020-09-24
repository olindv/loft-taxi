import React, { useState, useContext } from "react";
import "./Registration.scss";
import { Logo } from "loft-taxi-mui-theme";
import { func, string } from "prop-types";
import { AuthContext } from "./App";

const propTypes = {
  changePage: func,
};

const Registration = ({ changePage }) => {
  const [fieldsValue, setValue] = useState({
    email: "",
    name: "",
    secondName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...fieldsValue, [name]: value });
  };

  const auth = useContext(AuthContext);
  const registrationSubmit = (e) => {
    e.preventDefault();
    auth.logout();
  };

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
              <button className="form__link" name="login" onClick={changePage}>
                Войти
              </button>
            </div>
            <div className="form__row form__row_column">
              <label htmlFor="email">Адрес электронной почты</label>
              <input
                type="email"
                id="email"
                name="email"
                value={fieldsValue.email}
                onChange={handleChange}
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
                  value={fieldsValue.name}
                  onChange={handleChange}
                  className="form__input"
                  required={true}
                ></input>
              </div>
              <div className="form__row form__row_column">
                <label htmlFor="secondName">Фамилия</label>
                <input
                  type="secondName"
                  id="secondName"
                  name="secondName"
                  value={fieldsValue.secondName}
                  onChange={handleChange}
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
                value={fieldsValue.password}
                onChange={handleChange}
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

export default Registration;
