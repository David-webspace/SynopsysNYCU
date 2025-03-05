import React, { useState } from 'react'
import { FaDiceD20, FaCommentDollar, FaErlang, FaSchool, FaChalkboardTeacher } from "react-icons/fa";

const Indicator = () => {

  const ScreenHeight = window.innerHeight

  const [iconActive, setIconActive] = useState('')
  const [iconHover, setIconHover] = useState('')

  const iconList = [
    {id:1, icon:FaDiceD20, text:"全球第一晶片設計軟體公司 X 半導體及電子工程研究先鋒"},
    {id:2, icon:FaCommentDollar, text:"新思每年投入數萬美金 頂尖研究大學與國家實驗室師資"},
    {id:3, icon:FaErlang, text:"加開全英文國際梯次，核發英語修業證書"},
    {id:4, icon:FaSchool, text:"專注於半導體核心技術：晶片設計、積體電路與製程，包含原理與硬體程式語言實作"},
    {id:5, icon:FaChalkboardTeacher, text:"服務學員人數達400人"},
  ]

  const pointerRender = iconList.map((icon, index) => {

    const IconFrame = icon.icon
    console.log("iconActive=", iconActive)
    // console.log("icon.icon.name=", icon.icon.name)

    return(
      <li
        key={index} 
        className={`
          iconList
          ${icon.icon.name == iconHover ? 'iconListActive' : ''}
          ${icon.icon.name == iconActive ? 'iconListActive' : ''}
        `}
        onMouseEnter={()=>setIconHover(icon.icon.name)}
        onClick={()=>setIconActive(icon.icon.name)}
      >
        <IconFrame size={50} />
        <h4>{icon.text}</h4>
      </li>
    )
  })

  return (
    <div style={{height:ScreenHeight, paddingTop:"80px"}} className='df fd-c jc-c'>
        <h2 className='mg-b-30'>我們的特色</h2>
        <ul className='df fd-c' style={{borderLeft:"2px inset rgb(220, 220, 220)"}}>
          {pointerRender}
        </ul>
    </div>
  )
}

export default Indicator