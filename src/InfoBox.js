import React from "react";
import InfoBoxNoCard from "./InfoBoxNoCard";
import InfoBoxSelect from "./InfoBoxSelect";
import InfoBoxOrdered from "./InfoBoxOrdered";
import { connect } from "react-redux";

export function InfoBox({ paymentFlag, orderFlag }) {
  return (
    <div className="info__box">
      <div className="info__box_container">
        {paymentFlag ? (
          orderFlag ? (
            <InfoBoxOrdered />
          ) : (
            <InfoBoxSelect />
          )
        ) : (
          <InfoBoxNoCard />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    paymentFlag: state.flags.paymentFlag,
    orderFlag: state.flags.orderFlag,
  };
};

export default connect(mapStateToProps, null)(InfoBox);
