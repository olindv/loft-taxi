import React from "react";
import {Logo} from 'loft-taxi-mui-theme';
import "./Header.scss";
import PropTypes from 'prop-types';

const Header = ({ changePage, pageName }) => {
  const headerButtons = [
    { name: "map", text: "Карта" },
    { name: "profile", text: "Профиль" },
    { name: "login", text: "Войти" },
  ];

  return (
    <>
      {(pageName === "map" || pageName === "profile") && (
        <header className="header">
          <div className="header__container container">
            <div className="header__logo">
              <Logo/>
            </div>
            <nav className="header__navigation">
              <ul className="header__navigation-list">
                {headerButtons.map(({ name, text }) => (
                  <li className="header__navigation-item" key={name}>
                    <button
                      name={name}
                      onClick={changePage}
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

Header.propTypes = {
  pageName: PropTypes.string,
  changePage: PropTypes.func
}

export default Header;
