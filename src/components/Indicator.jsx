import React, { useState } from 'react'
import { FaDiceD20, FaCommentDollar, FaErlang, FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import { TbBackground } from 'react-icons/tb';
// import iconList from '../datas/iconList.json'

const Indicator = () => {

  const ScreenHeight = window.innerHeight

  const [iconActive, setIconActive] = useState('leader')
  const [iconHover, setIconHover] = useState('')

  const iconList = [
    {id:"leader", icon:FaDiceD20, text:"全球第一晶片設計軟體公司 X 半導體及電子工程研究先鋒", background: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800"},
    {id:"sponsor", icon:FaCommentDollar, text:"新思每年投入數萬美金 頂尖研究大學與國家實驗室師資", background: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800"},
    {id:"international", icon:FaErlang, text:"加開全英文國際梯次，核發英語修業證書", background: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=800"},
    {id:"process", icon:FaSchool, text:"專注於半導體核心技術：晶片設計、積體電路與製程，包含原理與硬體程式語言實作", background: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=800"},
    {id:"services", icon:FaChalkboardTeacher, text:"服務學員人數達400人", background: "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=800"}
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
        <h4>{icon.text}</h4>
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
    <div style={{height:ScreenHeight, width:"100%", paddingTop:"20px"}} className='df fd-c jc-c'>
        <h2 className='mg-b-30'>我們的特色</h2>
        <div className='df'>
          <ul className='df fd-c' style={{width:"60%"}}>
            {pointerRender}
          </ul>
          {bgRender}
        </div>
    </div>
  )
}

export default Indicator