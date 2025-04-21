import React from 'react'
import Reflection from '../components/event-review/Reflection'
import Review_Highlight from '../components/event-review/Review_Highlight'
import '../css/event_review.css'
import { useTranslation } from 'react-i18next';

const Event_Review = () => {
  return (
    <div className='Container'>
      <Reflection />
      <Review_Highlight />
    </div>
  )
}

export default Event_Review