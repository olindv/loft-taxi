import React from "react";

const Registration = ({ changePage }) => {
  return (
    <>
      <h1>Страница Регистрации</h1>
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
              className="form__input"
            ></input>
          </div>
          <div className="form__row">
            <label htmlFor="secondName">Фамилия</label>
            <input
              type="text"
              id="secondName"
              name="secondName"
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
            className="form__input"
          ></input>
        </div>
        <div className="form__row">
          <button className="form__button" name="map" onClick={changePage}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </>
  );
};

export default Registration;
