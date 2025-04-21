import React, { useState } from 'react'
import { FaDiceD20, FaCommentDollar, FaErlang, FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import FeatureSlider from './FeatureSlider';
import { useTranslation } from 'react-i18next';
import '../css/Indicator.css'

const Indicator = () => {

  const ScreenHeight = window.innerHeight
  // ==================== Language Select ====================
  const { t, i18n } = useTranslation();

  const [iconActive, setIconActive] = useState('leader')
  const [iconHover, setIconHover] = useState('')

  const iconList = [
    {id:"leader", icon:FaDiceD20, text:"全球第一晶片設計軟體公司 X 半導體及電子工程研究先鋒", background: "https://live.staticflickr.com/65535/54455848536_2ba1b4b969_k.jpg"},
    {id:"sponsor", icon:FaCommentDollar, text:"新思每年投入數萬美金 頂尖研究大學與國家實驗室師資", background: "https://live.staticflickr.com/65535/54456102038_953f48dfcf_k.jpg"},
    {id:"international", icon:FaErlang, text:"加開全英文國際梯次，核發英語修業證書", background: "https://live.staticflickr.com/65535/54456101518_5e79f11883_k.jpg"},
    {id:"process", icon:FaSchool, text:"專注於半導體核心技術：晶片設計、積體電路與製程，包含原理與硬體程式語言實作", background: "https://live.staticflickr.com/65535/54456206100_14d894eb99_k.jpg"},
    {id:"services", icon:FaChalkboardTeacher, text:"服務學員人數達400人", background: "https://live.staticflickr.com/65535/54456207115_7e35330b12_k.jpg"}
  ]

  const pointerRender = iconList.map((icon, index) => {

    const IconFrame = icon.icon

    return(
      <li
        key={index} 
        className={`
          iconList
          ${icon.icon.name == iconHover ? 'iconListActive' : ''}
          ${icon.id == iconActive ? 'iconListActive' : ''}
        `}
        // onMouseEnter={()=>setIconHover(icon.icon.name)}
        // onClick={()=>setIconActive(icon.icon.name)}
        onClick={()=>setIconActive(icon.id)}
      >
        <IconFrame size={50} />
        <h4>{t(icon.text)}</h4>
      </li>
    )
  })

  const bgRender = iconList.map((bg, index) => {
    if(bg.id == iconActive){
      return(
        <div key={index} style={{width:"40%"}} className='df jc-c aln-itm-c'>
          <img src={bg.background} alt="" style={{width:"80%"}}/>
        </div>
      )
    }
  })

  return (
    <div className='indicatorContainer'>
        <FeatureSlider />
    </div>
  )
}

export default Indicator