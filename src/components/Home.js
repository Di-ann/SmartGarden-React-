import React from 'react';
import '../assets/styles/Home.css';
import Accordion from "../components/Accordion"; 
import homeImage from '../assets/png/home-image.png';
import leafLeft from "../assets/png/leaf-left.png";
import leafRight from "../assets/png/leaf-right.png";


const Home = () => {
    return (
        <main className="main">
            <section className="home-section" id="home">
                <div className="home__content">
                    <div className="up-text">
                        <h3 className="heading-3">
                            Автоматизированные системы ухода за растениями в доме и офисе.
                        </h3>
                        <h1 className="heading-1">Умные технологии для<br />живых растений</h1>
                        <p className="paragraph">
                            Создайте уютную и здоровую атмосферу со Smart Garden.
                            Наша система заботится о ваших растениях, пока вы наслаждаетесь жизнью.
                        </p>
                    </div>
                    <div className="features">
                        {[
                            {
                                title: 'Зеленый город',
                                text: 'Вы можете озеленить Ваш район с нашей помощью',
                            },
                            {
                                title: 'Экологичные решения',
                                text: 'Для создания зелёных уголков в доме, офисе, ресторане и других пространствах',
                            },
                            {
                                title: 'Автоматизированные устройства',
                                text: 'Для ухода за растениями (умные горшки, вертикальные сады, сенсоры)',
                            },
                            {
                                title: 'Простота и удобство',
                                text: 'С минимальными усилиями настраиваешь и управляешь системой, получая максимальную пользу для растений',
                            },
                        ].map((feature, index) => (
                            <div className="feature" key={index}>
                                <img src="/assets/svg/ckeck.svg" alt="✓" />
                                <div className="text">
                                    <h4 className="heading-4">{feature.title}</h4>
                                    <p className="paragraph">{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="home__image">
                    <img src={homeImage} alt="Умные технологии для растений" />
                </div>
            </section>

            <section className="how-it-works">
                <h2 className="section-title">Как мы создаём зелёные<br />пространства?</h2>
                <div className="how_it_works__container">
                    {[
                        {
                            icon: 'icon-analysis.svg',
                            title: 'Создаём зеленые зоны',
                            text: 'Мы проектируем и реализуем вертикальные сады, парковые зоны и умные системы ухода за растениями.',
                        },
                        {
                            icon: 'icon-green-city.svg',
                            title: 'Создаём зелёные зоны',
                            text: 'Мы проектируем и реализуем вертикальные сады, парковые зоны и умные системы ухода за растениями.',
                        },
                        {
                            icon: 'icon-office-green.svg',
                            title: 'Озеленяем офисы и рабочие пространства',
                            text: 'Создаём живые стены, интерьерные композиции и автоматизированные системы ухода за растениями.',
                        },
                    ].map((step, index) => (
                        <div className="step" key={index}>
                            <div className="step__icon">
                                <img src={`/assets/svg/${step.icon}`} alt={step.title} />
                            </div>
                            <h3 className="heading-3">{step.title}</h3>
                            <p className="paragraph">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="comparison">
                <div className="info">
                    <h2 className="header-2">Сравнение традиционного<br /> ухода и Smart Garden</h2>
                    <p className="paragraph">Чем автоматизированные системы лучше ручного ухода за<br /> растениями?</p>
                </div>
                <div className="table-container">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Фактор</th>
                                <th>Обычный уход</th>
                                <th>Smart Garden</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Полив', 'Нерегулярный, может быть слишком обильным или недостаточным', 'Автоматический, адаптируется к условиям'],
                                ['Расход воды', 'Высокий, часто избыточный', 'Экономия до 50% воды'],
                                ['Контроль влажности', 'Только вручную, сложно оценить', 'Датчики анализируют состояние почвы'],
                                ['Удобство', 'Нужно постоянно помнить о поливе', 'Все работает автоматически'],
                                ['Затраты времени', 'Нужно тратить время на уход', 'Экономия времени, всё под контролем'],
                            ].map(([factor, traditional, smart], index) => (
                                <tr key={index}>
                                    <td>{factor}</td>
                                    <td>{traditional}</td>
                                    <td>{smart}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="why-smart-garden">
                <div class="why-content">
                    <h2 class="header-2">Почему выбирают <br/> <span>Smart Garden?</span></h2>
                    <img src={leafLeft} alt="Лист слева" class="leaf-left"/>
                    <img src={leafRight} alt="Лист справа" class="leaf-right"/>
                </div>
                <Accordion />
            </section>
        </main>
    );
};

export default Home;
