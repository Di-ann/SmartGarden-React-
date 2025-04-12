import React, { useState } from 'react';
import '../assets/styles/Green_city.css';
import WantToHelp from '../assets/png/want-to-help.png';
import SimpleEmailForm from '../components/SimpleEmailForm';


const GreenCity = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.trim())) {
            setError("Введите корректный e-mail");
        } else {
            setError("");
            alert("Форма успешно отправлена!");
        }
    };

    return (
        <main>
            <section className="lets-make-cities-green-together" id="green_city">
                <div className="city-data">
                    <div className="city-data-header">
                        <h2 className="header-2">Сделаем города зелеными <br />вместе!</h2>
                        <img className="icon-leaves" src="/assets/svg/icon-leaves.svg" alt="Листики" />
                    </div>
                    <div className="container">
                        <h1 className="paragraph">Города могут дышать! Помоги<br /> озеленению своего района.</h1>
                        <h1 className="paragraph">Поддержи проект и помог установить умные системы автополива в<br /> парках, скверах и на улицах своего района.</h1>
                    </div>
                    <h3 className="header-3"><br/>Способы участия:</h3>
                    <div className="features">
                        <div className="feature">
                            <img src="/assets/svg/check2.svg" alt="✓"/>
                            <div>
                                <h3 className="heading-3">Финансовая<br /> поддержка</h3>
                                <p className="paragraph">Внеси любую сумму, и мы<br/> направим её на озеленение <br/>общественных пространств</p>
                            </div>
                        </div>

                        <div className="feature">
                            <img src="/assets/svg/check2.svg" alt="✓" />
                            <div>
                                <h3 className="heading-3">Индивидуальная <br/>установка</h3>
                                <p className="paragraph">Купи систему автополива для<br/> своего двора, парка или детской<br/> площадки</p>
                            </div>
                        </div>

                        <div className="feature">
                            <img src="/assets/svg/check2.svg" alt="✓"/>
                            <div>
                                <h3 className="heading-3">Корпоративное <br/>участие</h3>
                                <p className="paragraph">Если у тебя есть бизнес, ты <br/>можешь помочь озеленить город,<br/> спонсируя установку умных <br/>систем</p>
                            </div>
                        </div>

                        <div className="feature">
                            <img src="/assets/svg/check2.svg" alt="✓" />
                            <div>
                                <h3 className="heading-3">Волонтёрство</h3>
                                <p className="paragraph">Присоединяйся к команде Smart <br/>Garden и участвуй в городских<br/> мероприятиях по озеленению</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="help">
                <div className="want-to-help">
                    <h2 className="heading-2">Хочу помочь!</h2>
                    <h3 className="heading-3">💡 Как ты можешь помочь?</h3>
                    <div className="info">
                        <p className="paragraph">✔ Пожертвуй любую сумму – мы направим её на установку умных систем озеленения.</p>
                        <p className="paragraph">✔ Купи систему автополива для своего двора, парка или школы.</p>
                        <p className="paragraph">✔ Присоединись к команде Smart Garden – стань амбассадором зелёного будущего.</p>
                    </div>
                    <h4 className="heading-4">🌱 Чем больше людей поддержат проект, тем больше живых растений украсит наши улицы!</h4>
                    <h4 className="heading-5">📩 Оставь заявку – мы поможем озеленить твой район!</h4>

                    <SimpleEmailForm />


                </div>
                <img className="image-park" src={WantToHelp} alt="Парковая зона" />
            </section>       
        </main>
    );
};

export default GreenCity;
