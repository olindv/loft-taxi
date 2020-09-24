import React, { useContext } from "react";
import { Logo } from "loft-taxi-mui-theme";
import "./Header.scss";
import { string, func } from "prop-types";
import { AuthContext } from "./App";
import { Link } from "react-router-dom";

const propTypes = {
  pageName: string,
  changePage: func,
};

const Header = ({ changePage, pageName }) => {
  const context = useContext(AuthContext);
  const logoutButton = () => {
    context.logout();
  };

  const headerButtons = [
    { url: "/map", text: "Карта", id: "map" },
    { url: "/profile", text: "Профиль", id: "profile" },
    { url: "/", text: context.isLoggedIn ? "Войти" : "Выйти", id: "home" },
  ];
  return (
    <>
      <header className="header" data-testid="header">
        <div className="header__container container">
          <div className="header__logo">
            <Logo />
          </div>
          <nav className="header__navigation">
            <ul className="header__navigation-list">
              {headerButtons.map(({ url, text, id }) => (
                <li className="header__navigation-item" key={id}>
                  <Link to={url} className="header__navigation-button">
                    {text}
                  </Link>
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

export default Header;
