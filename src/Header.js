import React from "react";
import {Logo} from 'loft-taxi-mui-theme';
import "./Header.scss";

const Header = ({ changePage, pageName }) => {
  const headerButtons = [
    { name: "map", text: "Карта" },
    { name: "profile", text: "Профиль" },
    { name: "login", text: "Войти" },
  ];
  console.log(Logo);
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

export default Header;
