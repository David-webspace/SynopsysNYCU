import React from 'react'
import feedbacks from '../../datas/reflections.json'

const Reflection = () => {

  const feedbackRender = feedbacks.map((feedback, index) => {
    return(
      <div key={index} className='mg-b-30'>
        <h4>{feedback.student} | {feedback.degree} | {feedback.school} </h4>
        <h3>{feedback.feedback}</h3>
      </div>
    )
  })

  return (
    <div>
      <div className='txt-aln-c'>
        <h1>學員回饋</h1>
        <h4>Participants Feedback</h4>
      </div>
      {feedbackRender}
    </div>
  )
}

export default Reflection