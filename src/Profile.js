import React, { useState } from "react";
import { MCIcon } from "loft-taxi-mui-theme";
import "./Profile.scss";
import { connect } from "react-redux";
import { paymentRequest } from "./redux/actions/actions";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Profile = ({ payment }) => {
  const [inputValues, setInputValue] = useState({
    cardNumber: "",
    expiryDate: new Date(),
    userName: "",
    cvcNumber: "",
    token: window.localStorage.getItem("token"),
  });

  const handleDateChange = (date) => {
    setInputValue({
      ...inputValues,
      expiryDate: date,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const { cardNumber, expiryDate, userName, cvcNumber } = e.target;
    const token = window.localStorage.getItem("token");
    payment(
      cardNumber.value,
      expiryDate.value,
      userName.value,
      cvcNumber.value,
      token
    );
  };

  return (
    <div className="profile" data-testid="profile">
      <div className="profile__container">
        <div className="profile__wrap">
          <div className="profile__head">
            <h2 className="profile__title">Профиль</h2>
            <div className="profile__subtitle">Способ оплаты</div>
          </div>
          <form className="form" onSubmit={submit}>
            <div className="form__container">
              <div className="form__left">
                <div className="icon">
                  <MCIcon />
                </div>
                <div className="form__row form__row_column">
                  <label htmlFor="cardNumber">Номер карты:</label>
                  <input
                    type="cardNumber"
                    id="cardNumber"
                    name="cardNumber"
                    className="form__input"
                    placeholder="0000 0000 0000 0000"
                    required={true}
                  ></input>
                </div>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
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
                    required
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="form__right">
                <div className="form__row form__row_column">
                  <label htmlFor="userName">Имя владельца:</label>
                  <input
                    type="userName"
                    id="userName"
                    name="userName"
                    className="form__input"
                    required={true}
                  ></input>
                </div>
                <div className="form__row form__row_column">
                  <label htmlFor="cvcNumber">CVC:</label>
                  <input
                    type="cvcNumber"
                    id="cvcNumber"
                    name="cvcNumber"
                    className="form__input"
                    required={true}
                  ></input>
                </div>
              </div>
            </div>

            <button type="submit" className="form__button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    payment: (cardNumber, expiryDate, userName, cvcNumber, token) =>
      dispatch(
        paymentRequest({ cardNumber, expiryDate, userName, cvcNumber, token })
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
