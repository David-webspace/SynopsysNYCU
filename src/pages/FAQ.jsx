import React, { useEffect } from 'react'
import faqs from './../datas/faqs.json'
import '../i18n'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
  const { t, i18n } = useTranslation()

  // 添加 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const faqRender = faqs.map((faq, index) => {
    return(
      <div key={index} className="faq-item">
        <h3
          className='fade-in question mg-b-20 mg-t-20'
          style={{
            color:"#000",
            padding:"8px 20px",
            backgroundColor:"var(--grey-1)",
            display:"inline-block",
            borderRadius:"20px"
          }}>
            <b>{t(faq.faq)}</b>
        </h3>
        <h3 className='mg-b-10 fade-in answer'>{t(faq.answer1)}</h3>
        <h3 className='mg-b-20 fade-in answer'>{t(faq.answer2)}</h3>
      </div>
    )
  })

  return (
    <div className='Container'>
      <h1 className='mg-b-30 fade-in'>{t('常見問題：')}</h1>
      {faqRender}
    </div>
  )
}

export default FAQ
