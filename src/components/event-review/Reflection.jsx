import React from 'react';
import { useInView } from 'react-intersection-observer';
import feedbacks from '../../datas/reflections.json';

// 新增的 FeedbackCard 組件
const FeedbackCard = ({ feedback, isOdd, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className='mg-b-30'
      style={{
        width: "48%",
        float: isOdd ? "left" : "right",
        transform: isOdd ? "" : "translateY(60%)",
        marginBottom: "8%",
        opacity: inView ? 1 : 0,
        transition: `all 0.6s ease-out ${index * 0.2}s`
      }}
    >
      <h4 className='mg-b-5'>
        {feedback.student} | {feedback.degree} | {feedback.school}
      </h4>
      <h3 className='reflectionTxt'>{feedback.feedback}</h3>
    </div>
  );
};

const Reflection = () => {
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
    <div>
      <div className='txt-aln-c mg-b-50'>
        <h1>學員回饋</h1>
        {/* <h4>Participants Feedback</h4> */}
      </div>
      <div className='reflectionArrange' style={{ overflow: "auto" }}>
        {feedbackRender}
      </div>
    </div>
  );
};

export default Reflection;
