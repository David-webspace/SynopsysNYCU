import React from 'react'
import feedbacks from '../../datas/reflections.json'

const Reflection = () => {

  const feedbackRender = feedbacks.map((feedback, index) => {

    const isOdd = feedback.id % 2 !== 0

    return(
      <div
        key={index} 
        className='mg-b-30'
        style={{
          width:"48%",
          float: isOdd ? "left" : "right",
          transform: isOdd ? "" : "translateY(60%)",
          marginBottom:"8%"
        }}
      >
        <h4 className='mg-b-5'>{feedback.student} | {feedback.degree} | {feedback.school} </h4>
        <h3 className='reflectionTxt'>{feedback.feedback}</h3>
      </div>
    )
  })

  return (
    <div>
      <div className='txt-aln-c mg-b-50'>
        <h1>學員回饋</h1>
        {/* <h4>Participants Feedback</h4> */}
      </div>
      <div className='reflectionArrange' style={{overflow:"auto"}}>
        {feedbackRender}
      </div>
    </div>
  )
}

export default Reflection