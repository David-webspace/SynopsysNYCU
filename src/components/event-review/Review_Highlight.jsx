import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Review_Highlight = () => {
  const containerRef = useRef(null);
  const { t, i18n } = useTranslation();
  

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        containerRef.current.classList.add('visible');
        const images = containerRef.current.querySelectorAll('img');
        images.forEach((img) => img.classList.add('visible'));
      } else {
        containerRef.current.classList.remove('visible');
        const images = containerRef.current.querySelectorAll('img');
        images.forEach((img) => img.classList.remove('visible'));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='highlightContainer' ref={containerRef}>
      <div className='highlightItem'>
        <div className='mg-b-30'>
          <h2>{t('2024回顧')}</h2>
          <h3>{t('亮點摘要：製作線上課程、改為三天兩夜增進課程完整度。')}</h3>
          <h3>{t('時間：7/25-7/31')}</h3>
          <h3>{t('地點：陽明交大光復校區')}</h3>
          <h3>{t('學員總人數：240人')}</h3>
        </div>
        <div className='imageContainer'>
          <img src="https://live.staticflickr.com/65535/54455034567_f619ccf917_k.jpg" alt="" />
          <img src="https://live.staticflickr.com/65535/54455880001_8d28bafa15_k.jpg" alt="" />
          <img src="https://live.staticflickr.com/65535/54456069599_a5b3e45357_k.jpg" alt="" />
        </div>
      </div>
      <div className='highlightItem'>
        <div className='mg-b-30'>
          <h2>{t('2023回顧')}</h2>
          <h3>{t('亮點摘要：首次辦理、參訪國家半導體研究中心。')}</h3>
          <h3>{t('時間：8/1-8/4')}</h3>
          <h3>{t('地點：陽明交大光復校區')}</h3>
          <h3>{t('學員總人數：160人')}</h3>
        </div>
        <div className='imageContainer'>
          <img src="https://live.staticflickr.com/65535/54456248780_93dcdab226_k.jpg" alt="" />
          <img src="https://live.staticflickr.com/65535/54456142528_57f2fbabd9_k.jpg" alt="" />
          <img src="https://live.staticflickr.com/65535/54455888101_c787e7fd5d_k.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review_Highlight;
