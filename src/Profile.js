import React from "react";
import { MCIcon } from "loft-taxi-mui-theme";
import "./Profile.scss";
import { connect } from "react-redux";
import {
  paymentRequest,
  paymentGetCardRequest,
  paymentChangeField,
} from "./redux/actions/actions";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Profile = ({ payment, inputValues, getPaymentInfo, changeField }) => {
  const handleInnputChange = (e) => {
    const { name, value } = e.target;
    changeField({ name, value });
  };
  const handleDateChange = (date) => {
    changeField({ name: "expiryDate", value: date });
  };

  const submit = (e) => {
    e.preventDefault();
    payment(inputValues);
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
                    type="cvc"
                    id="cvc"
                    name="cvc"
                    value={inputValues.cvc}
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
        </div>
      </div>
    </div>
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
        paymentRequest({ cardNumber, expiryDate, userName, cvcNumber, token })
      ),
    changeField: (payload) => {
      dispatch(paymentChangeField(payload));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
