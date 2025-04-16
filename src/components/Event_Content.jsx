import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/home_event.css';
import { useTranslation } from 'react-i18next';

const Event_Content = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        containerRef.current.classList.add('visible');
        const images = containerRef.current.querySelectorAll('a');
        images.forEach(img => img.classList.add('visible'));
      } else {
        containerRef.current.classList.remove('visible');
        const images = containerRef.current.querySelectorAll('a');
        images.forEach(img => img.classList.remove('visible'));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='OuterLinkContainer' ref={containerRef}>
      <h1 style={{ padding: "20px 80px", textAlign: "center" }}>{t('活動整理讓你知')}</h1>
      <div className='OuterLink'>
        <Link to='/dev/event2025'>
          <h2>{t('2025 活動內容')}</h2>
          <div style={{ position: "relative" }}>
            <div className="mask"></div>
            <img
              src="https://images.pexels.com/photos/16913374/pexels-photo-16913374/free-photo-of-columns-at-entrance-of-maqsut-narikbayev-kazguu-university-in-astana.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
        </Link>
        <Link to='/dev/event-review'>
          <h2>{t('過去活動回顧')}</h2>
          <div style={{ position: "relative" }}>
            <div className="mask"></div>
            <img
              src="https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
        </Link>
        <Link to='/dev/online-resource'>
          <h2>{t('線上課程免費資源')}</h2>
          <div style={{ position: "relative" }}>
            <div className="mask"></div>
            <img
              src="https://images.pexels.com/photos/17774938/pexels-photo-17774938/free-photo-of-laptop-in-hand-and-laptop-on-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Event_Content;
