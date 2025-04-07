import React, { useState } from 'react'
import Curriculum from '../components/event_contents/Curriculum'
import Event_info_fee from '../components/event_contents/Event_info_fee'
import Event_rule from '../components/event_contents/Event_rule'
import { FaMapPin } from "react-icons/fa";
import '../css/event2025.css'


const indexItem = [
  { "id": "curriculum", "tag": "活動內容(課表)" },
  { "id": "eventInfo", "tag": "活動資訊、收費"},
  { "id": "eventRules", "tag": "活動辦法與細則"}
]

const Event_2025 = () => {
  const ScreenWidth = window.innerWidth

  const indexRender = indexItem.map((item, index) => {

    // ===========================indexRender ===============================
    const handleScrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const topOffset = 100; // Adjust this value to control the space between the top of the viewport and the element
        const elementPosition = element.getBoundingClientRect().top; //This gives the distance from the top of the viewport to target element
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        //pageYOffset gets the current scroll postion of the page
        //topOffset is the extra amount by which you want to adjust the scroll pisition. In this case, you're moving it down by 100px.
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  
    const [selectIndexItem, setSelectIndexItem] = useState('curriculum')
    const handleSelectedIndex = (source) => {
      setSelectIndexItem(source)
    }
  
    return(
      <a
        key={index} 
        className='mg-b-20 db'
        style={{color:`${selectIndexItem == item.id ? 'var(--purple-1)' : 'var(--white)'}`}}
        href={`#${item.id}`}
        onClick={(e) => {
          e.preventDefault();
          handleScrollToElement(item.id)
          handleSelectedIndex(item.id)
        }}
      >
        <h3><FaMapPin size={16}/> {item.tag}</h3>
      </a>
    )
  })

  return (
    <div style={{position:"relative", padding:`${ScreenWidth >= 425 ? '160px 50px' : '160px 20px'}`}}>
        <Curriculum />
      {/* <div className='indexEvent'>{indexRender}</div> */}
    </div>
  )
}

export default Event_2025