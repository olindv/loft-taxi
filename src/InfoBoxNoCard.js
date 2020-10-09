import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import "./InfoBox.scss";

export function InfoBoxNoCard() {
  return (
    <div className="info__box_nocard info__box_wrap">
      <div className="info__box_title">
        <Typography variant="h4">Заполните платежные данные</Typography>
      </div>
      <div className="info__box_text">
        <Typography variant="body1">
          Укажите информацию о банковской карте, чтобы сделать заказ.
        </Typography>
      </div>
      <div className="actions">
        <Button
          component={Link}
          to="/profile"
          color="primary"
          variant="contained"
        >
          Перейти в профиль
        </Button>
      </div>
    </div>
  );
}
export default InfoBoxNoCard;
