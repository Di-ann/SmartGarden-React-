import React from "react"
import { Link } from "react-router-dom";
import "../assets/styles/Footer.css"
import Timer from '../components/Timer'

const Footer = () => {

    return (
        <footer>
            <div class="footer-container">
                <div class="footer-nav">
                    <h3>Навигация</h3>
                    <ul className="footer-menu">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/green_city">Зелёный город</Link></li>
                        <li><Link to="/green_office">Зелёный офис</Link></li>
                        <li><Link to="/our_products">Наши продукты</Link></li>
                        <li><Link to="/contact_us">Связаться с нами</Link></li>
                    </ul>

                </div>
                <Timer/>
                <div class="footer-social">
                    <h3>Свяжитесь с нами</h3>
                    <div class="social-icons">
                        <a href="https://www.instagram.com" target="_blank">
                            <img src="assets/svg/instagram.svg" alt="Instagram" />
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank">
                            <img src="assets/svg/whatsapp.svg" alt="WhatsApp" />
                        </a>
                        <a href="https://www.telegram.com" target="_blank">
                            <img src="assets/svg/telegram.svg" alt="Telegram" />
                        </a>
                    </div>
                </div>

                <div class="footer-text">
                    <p>© 2025 Smart Garden. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 