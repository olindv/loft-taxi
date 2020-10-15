import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registrationRequest } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

export const RegistrationForm = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const { name, surname, email, password } = data;
        dispatch(registrationRequest({ name, surname, email, password }));
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__title">Регистрация</div>
            <div className="form__row">
                <div className="form__text">Уже зарегистрирован ?</div>
                <Link
                    to="/login"
                    className="form__link"
                    data-testid="loginLink"
                >
                    Войти
                </Link>
            </div>
            <div className="form__row form__row_column">
                <label htmlFor="email">Адрес электронной почты</label>
                <input
                    ref={register}
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
                        ref={register}
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
                        ref={register}
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
                    Зарегистрироваться
                </button>
            </div>
        </form>
    );
};
