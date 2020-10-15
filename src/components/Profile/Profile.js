import React from "react";

import "./Profile.scss";
import { connect } from "react-redux";
import { ProfileForm } from "./ProfileForm";

const Profile = ({ inputValues }) => {
  return (
    <div className="profile" data-testid="profile">
      <div className="profile__container">
        <div className="profile__wrap">
          <div className="profile__head">
            <h2 className="profile__title">Профиль</h2>
            <div className="profile__subtitle">Способ оплаты</div>
          </div>
          <ProfileForm inputValues={inputValues} />
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

export default connect(mapStateToProps, null)(Profile);
