import React from 'react'
import faqs from './../datas/faqs.json'
import '../i18n'
import { useTranslation } from 'react-i18next'

const FAQ = () => {

  const { t, i18n } = useTranslation()

  const faqRender = faqs.map((faq, index) => {
    return(
      <div>
        <h3
          className='mg-b-20'
          style={{
            color:"#000",
            marginTop:"50px", 
            padding:"8px 20px",
            backgroundColor:"var(--grey-1)",
            display:"inline-block",
            borderRadius:"20px"
          }}>
            <b>{t(faq.faq)}</b>
          </h3>
        <h3 className='mg-b-10'>{t(faq.answer1)}</h3>
        <h3 className='mg-b-20'>{t(faq.answer2)}</h3>
      </div>
    )
  })

  return (
    <div className='xContainer'>
      <h1 className='mg-b-30'>{t('常見問題：')}</h1>
      {faqRender}
    </div>
  )
}

export default FAQ