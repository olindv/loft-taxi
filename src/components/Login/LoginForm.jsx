import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const { email, password } = data;
        dispatch(loginRequest({ email, password }));
    };
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
                    ref={register}
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
                    ref={register}
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
    );
};
