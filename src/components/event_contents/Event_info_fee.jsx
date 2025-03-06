import React, { useState } from 'react'
import eventInfos from '../../datas/event_info.json'

const Event_info_fee = () => {

  const infosRender = eventInfos.map((info, index) => {
    const contentRender = info.content.map((content, contentIndex) => {
      const textRender = content.text.map((text, textIndex) => {
        let displayText = ''
        switch(content.type){
          case 'batch':
            displayText = text.batch
            break;
          case 'location':
            displayText = text.location
            break;
          case 'fee':
            return(
              <div key={textIndex}>
                <h4>{text.type} {text.price}</h4>
              </div>
            )
            break;
          case 'organizer':
            displayText = text.organizer
            break;
        }

        return(
          <div key={textIndex}>
            <h4 className='mg-b-10'>{displayText}</h4>
          </div>
        )
      })

      return(
        <div key={contentIndex} className='mg-b-30'>
          <h3 
            style={{backgroundColor:"var(--tag-BG)", width:"120px", color:"#ffffff"}}
            className='pd-5 mg-b-10'
          >
            {content.topic}
          </h3>
          {textRender}
        </div>
      )
    })

    return(
      <div key={index}>
        {contentRender}
      </div>
    )
  })

  return (
    <div className='mg-b-50' id='eventInfo'>
      <h2 className='mg-b-30 topicTag'>活動資訊＆收費</h2>
      {infosRender}
    </div>
  )
}

export default Event_info_fee