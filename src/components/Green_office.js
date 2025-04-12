import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Green_office.css';
import OfficeInfo from '../assets/png/office-info.png';

const GreenOffice = () => {
    const navigate = useNavigate(); 

    const handleScrollToOffice = () => {
        navigate('/contact_us'); 
    };
    return (
        <main>
        <section className="green-benefits" id="green_office">
            <div className="content">
                <div className="benefit">
                    <p className="benefit-title">
                        <img src="assets\svg\pointer.svg" alt="→" className="arrow-icon" />
                        <strong>Города нагреваются на 5-7°C сильнее, чем пригород</strong>
                    </p>
                    <p className="benefit-text">Деревья и растения помогают снижать температуру, создавая тень и испаряя влагу.</p>
                </div>
        
                <div className="benefit">
                    <p className="benefit-title">
                        <img src="assets\svg\pointer.svg" alt="→" className="arrow-icon" />
                        <strong>Растения поглощают до 20 кг CO₂ в год</strong>
                    </p>
                    <p className="benefit-text">Они очищают воздух, снижая уровень загрязнения.</p>
                </div>
        
                <div className="benefit">
                    <p className="benefit-title">
                        <img src="assets\svg\pointer.svg" alt="→" className="arrow-icon" />
                        <strong>Зелёные зоны удерживают до 30% осадков</strong>
                    </p>
                    <p className="benefit-text">Это снижает риск затоплений во время дождей.</p>
                </div>
        
                <div className="benefit">
                    <p className="benefit-title">
                        <img src="assets\svg\pointer.svg" alt="→" className="arrow-icon" />
                        <strong>Деревья уменьшают шум на 40%</strong>
                    </p>
                    <p className="benefit-text">Они создают естественные барьеры от городского шума.</p>
                </div>
            </div>
        
            <div className="image-container">
                <img src={OfficeInfo} alt="Зелёный офис" />
                <button className="green-office-btn" id="scrollToOffice" onClick={handleScrollToOffice}>Хочу зелёный офис ➜</button>
            </div>
        </section>
    </main>   
    );
};

export default GreenOffice;