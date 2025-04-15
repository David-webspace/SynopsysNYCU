import React, { useState, useEffect } from 'react';
import onlineResource from '../datas/onlineResource.json';
import { FaMapPin } from "react-icons/fa";
import '../i18n';
import { useTranslation } from 'react-i18next';
import '../css/online_resource.css';

const Online_Free_Resource = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('');

  // 監聽滾動事件，實現導航欄高亮
  useEffect(() => {
    const handleScroll = () => {
      const sections = onlineResource.map(resource => document.getElementById(resource.id));
      const scrollPosition = window.scrollY + 150; // Offset for sticky navbar

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resourceRender = onlineResource.map((resource, index) => {
    return (
      <div key={index} id={resource.id}  className="videoCard">
        <h2>{t('前導課程')} {t(resource.topic)}</h2>
        {resource.episode.map((episode, episodeIndex) => (
          <div key={episodeIndex} className='videoCardItem'>
            <iframe
              src={episode.youtubeEmbed}
              title={`YouTube video ${episodeIndex}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              ></iframe>
            <div className='sourceTxt'>
              <h2>{episode.EP} {t(episode.content)}</h2>
              <h4>{t(episode.description)}</h4>
            </div>
          </div>
        ))}
      </div>
    );
  });

  const indexRender = onlineResource.map((resource, index) => (
    <a
      key={index}
      href={`#${resource.id}`}
      className={activeSection === resource.id ? 'active' : ''}
      onClick={(e) => {
        e.preventDefault();
        const targetElement = document.getElementById(resource.id);

        if (targetElement) {
          // 計算目標元素的位置並加入偏移量
          const headerHeight = 80; // 假設 Header 的高度為 100px
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          console.log(window.scrollY)
          const offsetPosition = elementPosition - headerHeight;

          // 平滑滾動到指定位置
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }}
    >
      <h3><FaMapPin size={16} /> {t(resource.topic)}</h3>
    </a>
  ));

  return (
    <div className="videoCardContainer" style={{position:"relative"}}>
      <div>
        <h1 className='mg-b-50'>{t('線上課程免費資源')}</h1>
        {resourceRender}
      </div>
      <div className="indexNav">
        <h2>{t('目錄')}</h2>
        {indexRender}
      </div>
    </div>
  );
};

export default Online_Free_Resource;
