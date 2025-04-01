import Event_Content from '../components/Event_Content'
import Indicator from '../components/Indicator';
import Opening from '../components/Opening';
import ScrollPage from '../hooks/ScrollPage'

const Homedev = () => {

  const ScreenWidth = window.innerWidth

  return (
    <div className='xContainer' style={{marginTop:"-160px"}}>
        <ScrollPage />
        <Opening />
        <Indicator />
        <Event_Content />
    </div>
  )
}

export default Homedev 