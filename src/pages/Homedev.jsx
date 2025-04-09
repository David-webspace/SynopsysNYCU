import Event_Content from '../components/Event_Content'
import Indicator from '../components/Indicator';
import Opening from '../components/Opening';
import Homemain from '../components/Homemain';
import ScrollPage from '../hooks/ScrollPage'
import Counter from '../components/Counter';
import HomeSlogan from '../components/HomeSlogan';

const Homedev = () => {

  const ScreenWidth = window.innerWidth
  const targetDate = "2025-04-20T23:59:59";

  return (
    <>
        {/* <ScrollPage /> */}
        {/* <Opening /> */}
        <Homemain />
        <HomeSlogan />
        <Counter targetDate={targetDate}/>
        <Indicator />
        <Event_Content />
    </>
  )
}

export default Homedev 