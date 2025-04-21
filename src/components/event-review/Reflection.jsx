import React from 'react';
import { useInView } from 'react-intersection-observer';
import feedbacks from '../../datas/reflections.json';
import '../../css/reflection.css'
import { useTranslation } from 'react-i18next';

// 新增的 FeedbackCard 組件
const FeedbackCard = ({ feedback, isOdd, index }) => {
  const { t, i18n } = useTranslation();

  const ScreenWidth = window.innerWidth;

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className='feedbackCard'
      style={{
        float: isOdd ? "left" : "right",
        marginTop: ScreenWidth > 1024 ? ` ${isOdd ? '' : '80px'}` : '20px',
        marginBottom: `10px`,
        opacity: inView ? 1 : 0,
        transition: `all 0.6s ease-out ${index * 0.2}s`
      }}
    >
      <h4 className='mg-b-5'>
        {t(feedback.student)} | {t(feedback.degree)} | {t(feedback.school)}
      </h4>
      <h3 className='reflectionTxt'>{t(feedback.feedback)}</h3>
    </div>
  );
};

const Reflection = () => {
  const { t, i18n } = useTranslation();
  
  const feedbackRender = feedbacks.map((feedback, index) => {
    const isOdd = feedback.id % 2 !== 0;
    return (
      <FeedbackCard
        key={index}
        feedback={feedback}
        isOdd={isOdd}
        index={index}
      />
    );
  });

  return (
    <div className='mg-b-50'>
      <div className='txt-aln-c mg-b-50'>
        <h1>{t('學員回饋')}</h1>
      </div>
      <div className='reflectionArrange'>
        {feedbackRender}
      </div>
    </div>
  );
};

export default Reflection;
