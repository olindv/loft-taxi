import React from "react";
import { Logo } from "loft-taxi-mui-theme";
import "./Header.scss";
import { func } from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { logoutUser } from "./redux/actions/actions";
import { connect } from "react-redux";

const propTypes = {
  isLoggedOut: func,
};

const Header = ({ isLoggedOut }) => {
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    isLoggedOut();
    history.push("/login");
  };
  const headerButtons = [
    { url: "/map", text: "Карта", id: "map" },
    { url: "/profile", text: "Профиль", id: "profile" },
    { url: "/login", text: "Выйти", id: "home" },
  ];
  return (
    <>
      <header className="header" data-testid="header">
        <div className="header__container container">
          <div className="header__logo">
            <Logo animated />
          </div>
          <nav className="header__navigation">
            <ul className="header__navigation-list">
              {headerButtons.map(({ url, text, id }) => (
                <li className="header__navigation-item" key={id}>
                  {id === "home" ? (
                    <Link
                      to={url}
                      className="header__navigation-button"
                      onClick={handleLogout}
                    >
                      {text}
                    </Link>
                  ) : (
                    <Link to={url} className="header__navigation-button">
                      {text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

Header.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedOut: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
