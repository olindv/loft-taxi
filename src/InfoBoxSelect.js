import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Paper,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { addressListRequest, routeRequest } from "./redux/actions/actions";
import "./InfoBox.scss";

export function InfoBoxSelect({ getAddresses, addressList, getRoutes }) {
  const [addressValues, setAddressValues] = useState({
    addressFrom: "",
    addressTo: "",
  });

  useEffect(() => {
    getAddresses();
  }, [getAddresses]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setAddressValues({ ...addressValues, [name]: value });
  };
  const makeOrder = (e) => {
    e.preventDefault();
    getRoutes(addressValues.addressFrom, addressValues.addressTo);
  };

  const CreateCustomSelect = ({ addressValue, filteredOption }) => {
    let menuItem =
      addressList.length &&
      addressList
        .filter((item) => item !== filteredOption)
        .map((addressOption, index) => (
          <MenuItem key={index} value={addressOption}>
            {addressOption}
          </MenuItem>
        ));

    return (
      <Select
        value={addressValues[addressValue]}
        onChange={inputChange}
        inputProps={{ name: addressValue }}
        data-testid={addressValue}
      >
        {menuItem}
      </Select>
    );
  };

  return (
    <Paper className="info__box_wrap">
      <form className="info__box_form" onSubmit={makeOrder}>
        <FormControl className="info__box_control">
          <InputLabel id="addressFrom">Откуда</InputLabel>
          <CreateCustomSelect
            addressValue="addressFrom"
            filteredOption={addressValues.addressTo}
          />
        </FormControl>
        <FormControl className="info__box_control">
          <InputLabel id="addressTo">Куда</InputLabel>
          <CreateCustomSelect
            addressValue="addressTo"
            filteredOption={addressValues.addressFrom}
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Вызвать такси
        </Button>
      </form>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    addressList: state.addresses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAddresses: () => {
      return dispatch(addressListRequest());
    },
    getRoutes: (addressFrom, addressTo) => {
      return dispatch(routeRequest({ addressFrom, addressTo }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxSelect);
