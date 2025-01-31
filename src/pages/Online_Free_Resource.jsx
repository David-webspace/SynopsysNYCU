import React from 'react'
import Online_Resource from '../components/Online_Resource'
import onlineResource from '../datas/onlineResource.json'

const Online_Free_Resource = () => {
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
            allowfullscreen>
          </iframe>
        </div>
      )
    })

    return(
      <div key={index}>
        <h2 className='mg-b-20'>前導課程 {resource.topic}</h2>
        {youtubeRender}
      </div>
    )
  })

  return (
    <div>
      <div className='df fd-c aln-itm-c'>
        <h2>線上課程免費資源</h2>
        {resourceRender}
      </div>
      {/* <Online_Resource /> */}

    </div>
  )
}

export default Online_Free_Resource