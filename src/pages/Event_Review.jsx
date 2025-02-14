import React from 'react'
import Reflection from '../components/event_review/Reflection'
import Review2024 from '../components/event_review/Review2024'
import Review2023 from '../components/event_review/Review2023'
import Review_Highlight from '../components/event_review/Review_Highlight'

const Event_Review = () => {
  return (
    <div>
      <Reflection />
      <Review_Highlight />
      {/* <Review2024 /> */}
      {/* <Review2023 /> */}
    </div>
  )
}

export default Event_Review