import React from "react";

import "./Profile.scss";
import { connect } from "react-redux";
import {
    paymentRequest,
    paymentChangeField,
} from "../../redux/actions/actions";

import { ProfileForm } from "./ProfileForm";

const Profile = ({ payment, inputValues, changeField }) => {
    // const handleInnputChange = (e) => {
    //   const { name, value } = e.target;
    //   changeField({ name, value });
    // };
    // const handleDateChange = (date) => {
    //   changeField({ name: "expiryDate", value: date });
    // };

    // const submit = (e) => {
    //   e.preventDefault();
    //   payment(inputValues);
    // };

    return (
        <div className="profile" data-testid="profile">
            <div className="profile__container">
                <div className="profile__wrap">
                    <div className="profile__head">
                        <h2 className="profile__title">Профиль</h2>
                        <div className="profile__subtitle">Способ оплаты</div>
                    </div>
                    <ProfileForm />
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     payment: (cardNumber, expiryDate, userName, cvcNumber, token) =>
//       dispatch(
//         paymentRequest({ cardNumber, expiryDate, userName, cvcNumber, token })
//       ),
//     changeField: (payload) => {
//       dispatch(paymentChangeField(payload));
//     },
//   };
// };
export default connect(mapStateToProps, null)(Profile);
