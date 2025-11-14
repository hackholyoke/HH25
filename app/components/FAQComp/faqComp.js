'use client'
import React, { useState } from "react";
import Image from "next/image";
import './faqComp.css';

export const FAQComp = ({ closeQ, openQ, answerText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className='faq-container' onClick={handleOpen}>
      <div className={`faq${isOpen ? ' faqOpenned' : ''}`}>
        {!isOpen && (
          <div className='closed-faq'>
            <Image src={closeQ} alt="FAQ closed card" priority className="faq-img" />
          </div>
        )}
        {isOpen && (
          <div className='open-faq'>
            <Image src={openQ} alt="FAQ open card" priority className="faq-img" />
            <div className='answer-faq'>{answerText}</div>
          </div>
        )}
      </div>
    </div>
  );
};
