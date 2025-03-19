import React from 'react'
<<<<<<< HEAD

const FAQ = () => {
  return (
    <div>
      <h1 className='mg-b-30'>常見問題：</h1>
      <h3 className='mg-b-20' style={{color:"#000", marginTop:"50px"}}><b>半導體領域很大，三天的營隊是否足夠呢？</b></h3>
      <h3 className='mg-b-10'>足夠學員獲得超越同儕的知識以及視野。</h3>
      <h3 className='mg-b-20'>本營隊也在三天之內安排了全方面的高水準課程，此外也提供線上的前導課讓學員可以預習，力求讓學員們寶貴的學習時間得到最佳的運用。</h3>

      <h3 className='mg-b-20' style={{color:"#000", marginTop:"50px"}}><b>大學端舉辦的高中生營隊很多，「半導體與IC設計科普夏令營」的特色是？</b></h3>
      <h3 className='mg-b-10'>更加注重知識與產業理解。</h3>
      <h3 className='mg-b-20'>我們將一般營隊常見的團康活動改為與業界學長姐的交流，在也能讓學員練習人際相處的同時，也超越課堂的知識，接觸到產業界的第一手經驗。</h3>

      <h3 className='mg-b-20' style={{color:"#000", marginTop:"50px"}}><b>如果沒有程式基礎、數理表現也普通，我可以跟得上課程嗎？</b></h3>
      <h3 className='mg-b-10'>完全沒問題。</h3>
      <h3 className='mg-b-20'>首先，我們原本就是設計成給零基礎的學員參與的，此外，在實做課程以及成果發表上也都會安排助教輔導。最後，如果真的還是擔心，歡迎多看幾次完全免費的線上課程穩固基礎喔！</h3>

      <h3 className='mg-b-20' style={{color:"#000", marginTop:"50px"}}><b>需要提供語言能力或是外國籍證明才可以報名英語梯次嗎？</b></h3>
      <h3 className='mg-b-10'>不需要。</h3>
      <h3 className='mg-b-20'>今年新增的英語梯次目標之一即是實現半導體領域未來人才交流的國際化，並且工作人員們也都具有中英雙語能力。因此，只要自評能進行基礎的英語對話，我們都歡迎你的報名。</h3>

      <h3 className='mg-b-20' style={{color:"#000", marginTop:"50px"}}><b>完成營隊課程之後，我可以獲得什麼呢？</b></h3>
      <h3 className='mg-b-10'>基礎知識、產業理解、結訓證明。</h3>
      <h3 className='mg-b-20'>足夠讓學員結訓後能夠繼續進行自學的基礎知識，輔助生涯規劃所需的產業發展歷程與未來方向理解，數位電路設計的體驗以及結訓證明。</h3>
      
=======
import faqs from './../datas/faqs.json'

const FAQ = () => {

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
            <b>{faq.faq}</b>
          </h3>
        <h3 className='mg-b-10'>{faq.answer1}</h3>
        <h3 className='mg-b-20'>{faq.answer2}</h3>
      </div>
    )
  })

  return (
    <div>
      <h1 className='mg-b-30'>常見問題：</h1>
      {faqRender}
>>>>>>> d69bd490df02c9aa51fd295ba86e859820802c0f
    </div>
  )
}

export default FAQ