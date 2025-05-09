import React, { useEffect, useRef } from 'react'
import '../i18n'
import { useTranslation } from 'react-i18next'
import originData from '../datas/origins.json'
import '../css/origin.css'

const Origin = () => {
  const { t } = useTranslation()

  // 創建一個觀察器
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, {
      threshold: 0.1 // 當元素出現 10% 時觸發
    });

    // 獲取所有需要觀察的元素
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const TextBlock = ({ text, bold, className = '' }) => (
    <h4 className={`mg-b-20 fade-in ${className}`} style={{ fontWeight: bold ? 'bold' : '300' }}>
      {t(text)}
    </h4>
  )

  return (
    <div className='Container'>
      <div className='mg-b-50 fade-in'>
        <h1 className='mg-b-30'>{t(originData.title)}</h1>
        <div className='content-section'>
          <img 
            src="https://cmn-hant.overseas.ncnu.edu.tw/wp-content/uploads/2023/01/NCTU Alumni_1.webp"
            alt="Section 1" 
            className='section-image fade-in float-right'
          />
          <TextBlock text={originData.mainContent.intro1} className="mg-b-10" />
          <TextBlock text={originData.mainContent.intro2} />
        </div>
      </div>

      <div className='content-section fade-in'>
        <img 
          src="https://img.digitimes.com/newsimg/2022/1212/650365-1-rqxod.jpg"
          alt="Section 2" 
          className='section-image fade-in float-left'
        />
        <TextBlock text={originData.synopsys.slogan} bold />
        {originData.synopsys.content.map((text, index) => (
          <TextBlock key={index} text={text} />
        ))}
      </div>

      <div className='content-section fade-in'>
        <img 
          src="https://www.sohodd.com/wp-content/uploads/2020/10/xinsikeji.jpg"
          alt="Section 3" 
          className='section-image fade-in float-right'
        />
        <TextBlock text={originData.synopsys.tagline} bold />
        {originData.synopsys.description.map((text, index) => (
          <TextBlock key={index} text={text} />
        ))}
      </div>

      <div className='content-section fade-in'>
        <img 
          src="https://nctu-alumni-voice.sec.NCTU Alumni.edu.tw/wp-content/uploads/2024/08/20240828_0010-1.jpg"
          alt="Section 4" 
          className='section-image fade-in float-left'
        />
        <TextBlock text={originData.nctu.slogan} bold />
        <TextBlock text={originData.nctu.motto} bold />
        {originData.nctu.content.map((text, index) => (
          <TextBlock key={index} text={text} />
        ))}
      </div>
    </div>
  )
}

export default Origin
