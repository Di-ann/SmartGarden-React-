import React, { useState } from 'react';
import '../assets/styles/Our_products.css';
import Accordion from "../components/Accordion"; 
import SmartPots from '../assets/png/smart-pots.png';
import VerticalGardens from '../assets/png/vertical-gardens.png';
import PhytoLamps from '../assets/png/phyto-lamps.png';
import LeafLeft from '../assets/png/leaf-left.png';
import LeafRight from '../assets/png/leaf-right.png';

const OurProducts = () => {
    return (
        <main>
        <section className="products" id="our_products">
            <h2 className="heading-2">Наши продукты</h2>
            <div className="product-list">
                
                <div className="product">
                    <div className="product-wrapper">
                        <div className="product-image">
                            <img src={SmartPots} alt="Умные горшки" />
                            <div className="overlay">
                                <p className="caption-details">Контролируют влажность почвы, температуру и уровень воды. Идеально подходят для дома и офиса.</p>
                                <p className="caption-price">от 200 Byn</p>
                            </div>
                        </div>
                    </div>
                    <p className="product-title">Умные горшки</p>
                    <p className="product-subtitle">С авто-поливом и сенсорами</p>
                </div>

                <div className="product">
                    <div className="product-wrapper">
                        <div className="product-image">
                            <img src={VerticalGardens} alt="Вертикальные сады" />
                            <div className="overlay">
                                <p className="caption-details">Компактные конструкции с автоматизированным поливом. Создайте живую стену в любом помещении.</p>
                                <p className="caption-price">от 1000 Byn</p>
                            </div>
                        </div>
                    </div>
                    <p className="product-title">Вертикальные сады</p>
                    <p className="product-subtitle">Модульные системы для стен</p>
                </div>

                <div className="product">
                    <div className="product-wrapper">
                        <div className="product-image">
                            <img src={PhytoLamps} alt="Фито-светильники" />
                            <div className="overlay">
                                <p className="caption-details">Специальный спектр света улучшает фотосинтез, помогая растениям расти быстрее и здоровее.</p>
                                <p className="caption-price">от 150 Byn</p>
                            </div>
                        </div>
                    </div>
                    <p className="product-title">Фито-светильники</p>
                    <p className="product-subtitle">Для оптимального роста растений</p>
                </div>
            </div>
        </section>

        <section class="why-smart-garden">
                <div class="why-content">
                    <h2 class="header-2">Почему выбирают <br/> <span>Smart Garden?</span></h2>
                    <img src={LeafLeft} alt="Лист слева" class="leaf-left"/>
                    <img src={LeafRight} alt="Лист справа" class="leaf-right"/>
                </div>
                <Accordion />
            </section>
    </main> 
    );
};

export default OurProducts;