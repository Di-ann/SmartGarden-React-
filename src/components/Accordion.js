import React, { useState } from "react";
import "../assets/styles/Home.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}>
        <button className="accordion-header" onClick={() => toggleAccordion(0)}>
          Автоматический полив
          <span className="accordion-arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#F7F8FA" />
              <path d="M22 18L16 12L10 18" stroke="#2055E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <div className="accordion-content" style={{ maxHeight: activeIndex === 0 ? "50%" : "0" }}>
          <p className="paragraph">💧 Экономия воды — система точно рассчитывает потребности растения и исключает избыточный полив.</p>
        </div>
      </div>

      <div className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}>
        <button className="accordion-header" onClick={() => toggleAccordion(1)}>
          Контроль через приложение
          <span className="accordion-arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#F7F8FA" />
              <path d="M22 18L16 12L10 18" stroke="#2055E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <div className="accordion-content" style={{ maxHeight: activeIndex === 1 ? "50%" : "0" }}>
          <p className="paragraph">📱 Дистанционный уход — отслеживайте уровень влажности, освещения и питательных веществ в реальном времени.</p>
        </div>
      </div>

      <div className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}>
        <button className="accordion-header" onClick={() => toggleAccordion(2)}>
          Экологические материалы
          <span className="accordion-arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#F7F8FA" />
              <path d="M22 18L16 12L10 18" stroke="#2055E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <div className="accordion-content" style={{ maxHeight: activeIndex === 2 ? "50%" : "0" }}>
          <p className="paragraph">🌿 Безопасность для природы — используются переработанные и биоразлагаемые материалы.</p>
        </div>
      </div>

      <div className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}>
        <button className="accordion-header" onClick={() => toggleAccordion(3)}>
          Современный дизайн
          <span className="accordion-arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#F7F8FA" />
              <path d="M22 18L16 12L10 18" stroke="#2055E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <div className="accordion-content" style={{ maxHeight: activeIndex === 3 ? "50%" : "0" }}>
          <p className="paragraph">🎨 Идеально вписывается в интерьер — стильные, минималистичные формы подходят для дома и офиса.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
