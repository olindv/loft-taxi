import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
    paymentRequest,
    paymentChangeField,
} from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import { MCIcon } from "loft-taxi-mui-theme";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { connect } from "react-redux";

export const ProfileForm = ({ payment, changeField, inputValues }) => {
    const handleInnputChange = (e) => {
        const { name, value } = e.target;
        changeField({ name, value });
    };
    const handleDateChange = (date) => {
        changeField({ name: "expiryDate", value: date });
    };

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const { name, surname, email, password } = data;
        dispatch(paymentRequest({ name, surname, email, password }));
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__container">
                <div className="form__left">
                    <div className="icon">
                        <MCIcon />
                    </div>
                    <div className="form__row form__row_column">
                        <label htmlFor="cardNumber">Номер карты:</label>
                        <input
                            ref={register}
                            type="cardNumber"
                            value={inputValues.cardNumber}
                            id="cardNumber"
                            name="cardNumber"
                            className="form__input"
                            placeholder="0000 0000 0000 0000"
                            onChange={handleInnputChange}
                            required={true}
                        ></input>
                    </div>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            ref={register}
                            name="expiryDate"
                            value={inputValues.expiryDate}
                            onChange={handleDateChange}
                            label="Срок действия:"
                            minDate={new Date()}
                            placeholder="07/22"
                            openTo="year"
                            views={["year", "month"]}
                            format="MM/yy"
                            fullWidth
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="form__right">
                    <div className="form__row form__row_column">
                        <label htmlFor="cardName">Имя владельца:</label>
                        <input
                            ref={register}
                            type="cardName"
                            id="cardName"
                            name="cardName"
                            value={inputValues.cardName}
                            className="form__input"
                            onChange={handleInnputChange}
                            required={true}
                        ></input>
                    </div>
                    <div className="form__row form__row_column">
                        <label htmlFor="cvc">CVC:</label>
                        <input
                            ref={register}
                            type="cvc"
                            id="cvc"
                            name="cvc"
                            // value={inputValues.cvc}
                            className="form__input"
                            onChange={handleInnputChange}
                            required={true}
                        ></input>
                    </div>
                </div>
            </div>

            <button type="submit" className="form__button">
                Сохранить
            </button>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        inputValues: state.payment,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        payment: (cardNumber, expiryDate, userName, cvcNumber, token) =>
            dispatch(
                paymentRequest({
                    cardNumber,
                    expiryDate,
                    userName,
                    cvcNumber,
                    token,
                })
            ),
        changeField: (payload) => {
            dispatch(paymentChangeField(payload));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
