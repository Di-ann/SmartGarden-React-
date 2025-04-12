import React from "react"
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css"
import logoPng from '../assets/png/logo.png';
import Timer from '../components/Timer'

const Navbar = () => {

    return (
        <header class="header">
            <script src="script.js"></script>
            <nav class="nav_container">
                <Link to="/" class="nav__logo">
                    <img src={logoPng} alt="logo smart garden"/>
                </Link>

                <div class="burger" id="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nav__menu" id="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">Главная</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/green_city" className="nav__link">Зелёный город</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/green_office" className="nav__link">Зелёный офис</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/our_products" className="nav__link">Наши продукты</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/contact_us" className="nav__link">Связаться с нами</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;