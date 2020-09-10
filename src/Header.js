import React from 'react';
import logo from './logo.png';
import './Header.scss'

const Header = ({changePage}) => {

    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo">
                    <img src={logo} alt="foo"/>
                </div>
                <nav className="header__navigation">
                    <ul className="header__navigation-list">
                        <li className="header__navigation-item">
                            <button name="map" onClick={changePage} className="header__navigation-button">Карта</button>
                        </li>
                        <li className="header__navigation-item">
                            <button name="profile" onClick={changePage} className="header__navigation-button">Профиль</button>
                        </li>
                        <li className="header__navigation-item">
                            <button name="login" onClick={changePage} className="header__navigation-button">Войти</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
