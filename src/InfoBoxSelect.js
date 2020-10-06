import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Paper,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { addressListRequest } from "./redux/actions/actions";
import "./InfoBox.scss";

export function InfoBoxSelect({ getAddresses }) {
  const makeOrder = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    getAddresses();
  });
  return (
    <Paper className="info__box_wrap">
      <form className="info__box_form" onSubmit={makeOrder}>
        <FormControl className="info__box_control">
          <InputLabel id="from-location">Откуда</InputLabel>
          <Select
            labelId="from-location"
            id="from-location"
            value=""
            // onChange={}
          ></Select>
        </FormControl>
        <FormControl className="info__box_control">
          <InputLabel id="to-location">Куда</InputLabel>
          <Select
            labelId="to-location"
            id="to-location"
            value=""
            // onChange={}
          ></Select>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAddresses: () => dispatch(addressListRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxSelect);
