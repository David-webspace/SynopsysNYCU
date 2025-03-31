import React from 'react'
import Analytics from '../backend/Analytics'
import VisitCounter from '../backend/VisitorCounter'

const Backend = () => {
  return (
    <div>
      <h2>Backend</h2>
      <Analytics />
      {/* <VisitCounter /> */}
    </div>
  )
}

export default Backend