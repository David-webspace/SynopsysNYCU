import React, { useState } from 'react'
import onlineResource from '../datas/onlineResource.json'
import { FaMapPin } from "react-icons/fa";

const Online_Free_Resource = () => {

  const [selectSourceItem, setSelectSourceItem] = useState('analytics')
  
  const handleSelectedSource = (source) => {
    setSelectSourceItem(source)
  }

  // ===========================resourceRender ===============================
  const resourceRender = onlineResource.map((resource, index) => {
    const youtubeRender = resource.episode.map((episode, episodeIndex) => {
      return(
        <div key={episodeIndex} className='mg-b-50'>
          <iframe
            width="560"
            height="315"
            src={episode.youtubeEmbed}
            title="YouTube video player"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          >
          </iframe>
        </div>
      )
    })

    return(
      <div key={index}>
        <h2 className='mg-b-20' id={`${resource.id}`}>前導課程 {resource.topic}</h2>
        {youtubeRender}
      </div>
    )
  })

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

  const indexRender = onlineResource.map((resource, index) => {
    const episodeRender = resource.episode.map((episode, episodeIndex) => {
      return(
        <div key={episodeIndex}>
          <h4>{episode.EP} {episode.content}</h4>
        </div>
      )
    })

    return(
      <a
        key={index} 
        className='mg-b-20 db'
        style={{color:`${selectSourceItem == resource.id ? '#383838' : '#b7b7b7'}`}}
        href={`#${resource.id}`}
        onClick={(e) => {
          e.preventDefault();
          handleScrollToElement(resource.id)
          handleSelectedSource(resource.id)
        }}
      >
        <h3><FaMapPin size={16}/> {resource.topic}</h3>
        <h4>{episodeRender}</h4>
      </a>
    )
  })

  return (
    <div style={{position:"relative"}}>
      <div className={`df fd-c aln-itm-c`}>
        <h1 className='mg-b-50'>線上課程免費資源</h1>
        {resourceRender}
      </div>
      <div className='indexNav'>{indexRender}</div>
    </div>
  )
}

export default Online_Free_Resource