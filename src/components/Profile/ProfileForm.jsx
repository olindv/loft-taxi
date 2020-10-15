import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  paymentRequest,
  paymentChangeField,
} from "../../redux/actions/actions";
import { MCIcon } from "loft-taxi-mui-theme";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { TextField } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";

export const ProfileForm = ({ inputValues }) => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleInnputChange = (e) => {
    const { name, value } = e.target;
    dispatch(paymentChangeField({ name, value }));
  };
  const handleDateChange = (date) => {
    dispatch(paymentChangeField({ name: "expiryDate", value: date }));
  };

  const onSubmit = (e) => {
    dispatch(paymentRequest());
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__container">
        <div className="form__left">
          <div className="icon">
            <MCIcon />
          </div>
          <div className="form__row form__row_column">
            <Controller
              id="cardNumber"
              name="cardNumber"
              rules={{ required: true }}
              control={control}
              defaultValue={inputValues.cardNumber}
              render={() => {
                return (
                  <TextField
                    id="cardNumber"
                    label="Номер карты"
                    type="cardNumber"
                    fullWidth
                    placeholder="0000 0000 0000 0000"
                    name="cardNumber"
                    value={inputValues.cardNumber}
                    onChange={handleInnputChange}
                  />
                );
              }}
            />
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              name="expiryDate"
              rules={{ required: true }}
              control={control}
              defaultValue={inputValues.expiryDate}
              render={() => (
                <DatePicker
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
              )}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className="form__right">
          <div className="form__row form__row_column">
            <Controller
              name="cardName"
              control={control}
              rules={{ required: true }}
              defaultValue={inputValues.cardName}
              render={() => (
                <TextField
                  label="Имя владельца"
                  type="cardName"
                  fullWidth
                  name="cardName"
                  placeholder="USER NAME"
                  value={inputValues.cardName}
                  onChange={handleInnputChange}
                />
              )}
            />
          </div>
          <div className="form__row form__row_column">
            <Controller
              name="cvc"
              control={control}
              rules={{ required: true }}
              defaultValue={inputValues.cvc}
              render={() => (
                <TextField
                  label="CVC*"
                  type="cvc"
                  fullWidth
                  name="cvc"
                  value={inputValues.cvc}
                  onChange={handleInnputChange}
                />
              )}
            />
          </div>
        </div>
      </div>

      <button type="submit" className="form__button">
        Сохранить
      </button>
    </form>
  );
};
