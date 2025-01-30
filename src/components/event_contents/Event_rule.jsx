import React from 'react'
import rules from '../../datas/event_rules.json'

const Event_rule = () => {

  
  const ruleRender = rules.map((rule, index) => {

    const contentRender = rule.rule.map((item, indexContent) => {
      return(
        <h4 key={indexContent}>
          <span className={`${item.id==0 ? 'dn' : '' }`}>{item.id}.</span>
          {item.content}
        </h4>
      )
    })

    return (
      <div key={index} className='mg-b-30'>
        <h3
          style={{backgroundColor:"var(--tag-BG)", width:"120px", color:"#ffffff"}}
          className='pd-5 mg-b-10'
        >
          {rule.topic}
        </h3>
        {contentRender}
      </div>
    )
  })

  return (
    <>
      <h2 className='mg-b-30 topicTag'>活動辦法與細則</h2>
      {ruleRender}
    </>
  )
}

export default Event_rule