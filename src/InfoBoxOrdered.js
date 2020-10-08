import React from "react";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { flagChangeValue } from "./redux/actions/actions";

export function InfoBoxOrdered({ changeOrderFlag }) {
  const handleClick = () => {
    changeOrderFlag();
  };
  return (
    <div className="info__box_ordered info__box_wrap">
      <div className="info__box_title">
        <Typography variant="h4">Заказ размещен</Typography>
      </div>
      <div className="info__box_text">
        <Typography variant="body1">
          Ваше такси прибудет через 10 минут
        </Typography>
      </div>
      <div className="actions">
        <Button color="primary" variant="contained" onClick={handleClick}>
          Оформить новый заказ
        </Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeOrderFlag: () => dispatch(flagChangeValue({ orderFlag: false })),
  };
};

export default connect(null, mapDispatchToProps)(InfoBoxOrdered);
