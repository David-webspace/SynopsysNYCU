import Event_Content from '../components/Event_Content'
import Indicator from '../components/Indicator';
import Opening from '../components/Opening';
import ScrollPage from '../hooks/ScrollPage'

const Home = () => {

  const ScreenWidth = window.innerWidth

  return (
    <>
    
    <div className='df fd-c jc-c aln-itm-c' style={{height:"100vh"}}>
      <div className='txt-aln-c mg-b-30'>
        <h1
          className='mg-b-20'
          style={{fontSize: `${
            ScreenWidth<425 ? '18px' : 
            ScreenWidth>425 && ScreenWidth<768 ? '22px' : 
            ScreenWidth>768 && ScreenWidth<1024 ? '26px' : 
            ScreenWidth>1024 ? '32px' : ''
          }`}}
        >
          新思科技 Ｘ 陽明交通大學
        </h1>
        <h1
          className='mg-b-20' 
          style={{fontSize: `${
            ScreenWidth<=425 ? '18px' : 
            ScreenWidth>425 && ScreenWidth<=768 ? '22px' : 
            ScreenWidth>768 && ScreenWidth<=1024 ? '26px' : 
            ScreenWidth>1024 ? '32px' : ''
          }`}}
        >
          2025 半導體與晶片設計科普夏令營
        </h1>
      </div>
      <h1 className='maintenanceText' style={{letterSpacing:"3px"}}>COMING SOON !</h1>
      <div className='qrContainer df jc-c pd-30' style={{width:"100%"}}>
        <div className='df fd-c aln-itm-c' style={{width:"200px"}}>
          <a href="https://www.facebook.com/NYCU.SYNOPSYS.SEMICONDUCTOR.ICDESIGN/" target='_blank'>
            <img src="fb_QRCODE.svg" alt="" style={{width:"80px", height:"80px", marginBottom:"20px"}}/>
          </a>
          <p>Facebook</p>
        </div>
        <div className='df fd-c aln-itm-c' style={{width:"200px"}}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScG196gYjMEf62hNkytam3tLChveSGopPgyPkzIBOrgc1WYPA/viewform?pli=1" target='_blank'>
            <img src="roll_QRCODE.svg" alt="" style={{width:"80px", height:"80px", marginBottom:"20px"}}/>
          </a>
          <p>Registration Form</p>
        </div>
      </div>
    </div>
    </>

  )
}

export default Home 