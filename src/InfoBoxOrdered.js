import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

export function InfoBoxOrdered() {
  return (
    <div className="info__box_ordered">
      <div className="info__box_title">
        <Typography variant="h4">Заказ размещен</Typography>
      </div>
      <div className="info__box_text">
        <Typography variant="body1">
          Ваше такси прибудет через 10 минут
        </Typography>
      </div>
      <div className="actions">
        <Button component={Link} color="primary" variant="contained">
          Оформить новый заказ
        </Button>
      </div>
    </div>
  );
}
export default InfoBoxOrdered;
