import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home_event.css';
import { useTranslation } from 'react-i18next';

const Event_Content = () => {
  const ScreenHeight = window.innerHeight;
  const { t, i18n } = useTranslation();

  return (
    <div className='fw'>
      <h1 style={{padding:"20px 80px", textAlign:"center"}}>{t('活動整理讓你知')}</h1>
      <div className='OuterLink'>
        <Link to='/dev/event2025'>
          <h2>{t('2025 活動內容')}</h2>
          <div style={{ position: "relative" }}>
            <div className="mask"></div>
            <img
              src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              src="https://images.pexels.com/photos/226737/pexels-photo-226737.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Event_Content;
