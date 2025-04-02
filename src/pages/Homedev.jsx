import Event_Content from '../components/Event_Content'
import Indicator from '../components/Indicator';
import Opening from '../components/Opening';
import Homemain from '../components/Homemain';
import ScrollPage from '../hooks/ScrollPage'
import Counter from '../components/Counter';

const Homedev = () => {

  const ScreenWidth = window.innerWidth
  const targetDate = "2025-07-10T23:59:59";

  return (
    <div className='xContainer' style={{marginTop:"-160px"}}>
        {/* <ScrollPage /> */}
        {/* <Opening /> */}
        <Homemain />
        <Counter targetDate={targetDate}/>
        <Indicator />
        <Event_Content />
    </div>
  )
}

export default Homedev 