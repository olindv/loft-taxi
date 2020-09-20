import React, { useContext } from "react";
import { Logo } from "loft-taxi-mui-theme";
import "./Header.scss";
import { string, func } from "prop-types";
import { AuthContext } from "./App";

const propTypes = {
  pageName: string.isRequired,
  changePage: func,
};

const Header = ({ changePage, pageName }) => {
  const logout = useContext(AuthContext);
  const logoutButton = () => {
    logout.logout();
  };

  const headerButtons = [
    { name: "map", text: "Карта" },
    { name: "profile", text: "Профиль" },
    { name: "login", text: logout.isLoggedInd ? "Войти" : "Выйти" },
  ];

  return (
    <>
      {(pageName === "map" || pageName === "profile") && (
        <header className="header" data-testid="Header">
          <div className="header__container container">
            <div className="header__logo">
              <Logo />
            </div>
            <nav className="header__navigation">
              <ul className="header__navigation-list">
                {headerButtons.map(({ name, text }) => (
                  <li className="header__navigation-item" key={name}>
                    <button
                      name={name}
                      onClick={name === "login" ? logoutButton : changePage}
                      className="header__navigation-button"
                    >
                      {text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

Header.propTypes = propTypes;

export default Header;
