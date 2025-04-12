import React, { useState } from 'react';
import '../assets/styles/Contact_us.css';
import { validateFields } from '../utils/formValidation';
import WantToHelp from '../assets/png/want-to-help.png';
import OfficeGreen2 from '../assets/png/office-green-2.png';
import OfficeGreen1 from '../assets/png/office-green-1.png';
import GardenGreen from '../assets/png/garden-green.png';
import SimpleEmailForm from '../components/SimpleEmailForm';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    homeArea: '',
    homePlants: '',
    officeDesks: '',
    officeType: '',
    gardenSize: '',
    gardenStyle: '',
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validateFields(formData);
    setErrors(foundErrors);
  
    if (Object.keys(foundErrors).length > 0) return;
  
    // Получаем текущие заявки из sessionStorage
    const storedSubmissions = JSON.parse(sessionStorage.getItem('submissions')) || {};
  
    const existingPhone = storedSubmissions[formData.email];
  
    // Логика отказа
    if (existingPhone && existingPhone === formData.phone) {
      alert('Вы уже отправили заявку с такими данными!');
      return;
    }
  
    if (existingPhone && existingPhone !== formData.phone) {
      alert('Заявка с этой почтой уже отправлена с другим номером.');
      return;
    }
  
    // Сохраняем новую пару email:phone
    storedSubmissions[formData.email] = formData.phone;
    sessionStorage.setItem('submissions', JSON.stringify(storedSubmissions));
  
    alert('Заявка отправлена!');
    console.log('Отправлено:', formData);
  
    // Очистка формы
    setFormData({
      name: '',
      phone: '',
      email: '',
      interest: '',
      homeArea: '',
      homePlants: '',
      officeDesks: '',
      officeType: '',
      gardenSize: '',
      gardenStyle: '',
      agreed: false,
    });
    setErrors({});
  };
  
  

  return (
    <main>
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
        <img className="image-park" src={WantToHelp} alt="Помочь проекту" />
      </section>

      <section className="green-office-form" id="contact_us">
        <div className="container">
          <div className="left">
            <h1 className="left-header">Мы сделаем Ваш офис/<br />дом зелёным</h1>
            <div className="images">
              <img src={OfficeGreen1} alt="Озелененный офис" />
              <div className="small-images">
                <img src={OfficeGreen2} alt="Озелененный интерьер" />
                <img src={GardenGreen} alt="Зелёный сад" />
              </div>
            </div>
          </div>

          <div className="right">
            <form className="form" onSubmit={handleSubmit}>
              <h2>Заполните форму и мы с Вами свяжемся!</h2>

              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                maxLength={30}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={handleChange}
                maxLength={13}
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <input
                type="text"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                maxLength={30}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <div id="extra-fields">
                <p className="paragraph">Выберите интересующий вас вариант:</p>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={errors.interest ? 'input-error' : ''}
                >
                  <option value="" disabled hidden>Выберите...</option>
                  <option value="home">Озеленение дома</option>
                  <option value="office">Озеленение офиса</option>
                  <option value="garden">Создание сада</option>
                </select>
                {errors.interest && <span className="error">{errors.interest}</span>}

                {formData.interest === 'home' && (
                  <>
                    <input
                      type="number"
                      name="homeArea"
                      placeholder="Площадь дома (м²)"
                      value={formData.homeArea}
                      onChange={handleChange}
                      maxLength={5}
                      className={errors.homeArea ? 'input-error' : ''}
                    />
                    {errors.homeArea && <span className="error">{errors.homeArea}</span>}

                    <input
                      type="text"
                      name="homePlants"
                      placeholder="Предпочитаемые растения"
                      value={formData.homePlants}
                      onChange={handleChange}
                      maxLength={200}
                      onKeyDown={(e) => /\d/.test(e.key) && e.preventDefault()}
                      className={errors.homePlants ? 'input-error' : ''}
                    />
                    {errors.homePlants && <span className="error">{errors.homePlants}</span>}
                  </>
                )}

                {formData.interest === 'office' && (
                  <>
                    <input
                      type="number"
                      name="officeDesks"
                      placeholder="Количество рабочих мест"
                      value={formData.officeDesks}
                      onChange={handleChange}
                      maxLength={5}
                      className={errors.officeDesks ? 'input-error' : ''}
                    />
                    {errors.officeDesks && <span className="error">{errors.officeDesks}</span>}

                    <input
                      type="text"
                      name="officeType"
                      placeholder="Тип помещения (опен-спейс, кабинет и т.д.)"
                      value={formData.officeType}
                      onChange={handleChange}
                      maxLength={200}
                      onKeyDown={(e) => /\d/.test(e.key) && e.preventDefault()}
                      className={errors.officeType ? 'input-error' : ''}
                    />
                    {errors.officeType && <span className="error">{errors.officeType}</span>}
                  </>
                )}

                {formData.interest === 'garden' && (
                  <>
                    <input
                      type="number"
                      name="gardenSize"
                      placeholder="Размер сада (м²)"
                      value={formData.gardenSize}
                      onChange={handleChange}
                      maxLength={5}
                      className={errors.gardenSize ? 'input-error' : ''}
                    />
                    {errors.gardenSize && <span className="error">{errors.gardenSize}</span>}

                    <input
                      type="text"
                      name="gardenStyle"
                      placeholder="Желаемый стиль сада"
                      value={formData.gardenStyle}
                      onChange={handleChange}
                      maxLength={200}
                      onKeyDown={(e) => /\d/.test(e.key) && e.preventDefault()}
                      className={errors.gardenStyle ? 'input-error' : ''}
                    />
                    {errors.gardenStyle && <span className="error">{errors.gardenStyle}</span>}
                  </>
                )}
              </div>

              <label className="checkbox">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                />
                Я согласен(на) на обработку персональных данных
              </label>
              {errors.agreed && <span className="error">{errors.agreed}</span>}

              <button type="submit">ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</button>
            </form>

            <div className="info">
              <p>Превратите ваш дом или офис в зелёный оазис! Узнайте, как наши инновационные решения по озеленению могут создать уютное и здоровое пространство.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
