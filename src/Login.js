import React from 'react';

const Login = ({changePage}) => {
    return (
        <>
            <h1>Страница Логина</h1>
            <form className="form">
                <div className="form__title">Войти</div>
                <div className="form__row">
                    <div className="form__text">Новый пользователь ?</div>
                    <button onClick={changePage} name="registration" className="form__link">Зарегистрируйтесь</button>
                </div>
                <div className="form__row">
                    <label htmlFor="login">Имя пользователя*</label>
                    <label type="text" id="login" name="name" className="form__input"></label>
                </div>
                <div className="form__row">
                    <label htmlFor="password">Пароль*</label>
                    <label type="password" id="password" name="password" className="form__input"></label>
                </div>
                <div className="form__row">
                    <button className="form__button" onClick={changePage} name="map">Войти</button>
                </div>
            </form>
        </>
    )
}

export default Login;