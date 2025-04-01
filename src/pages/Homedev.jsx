import Event_Content from '../components/Event_Content'
import Indicator from '../components/Indicator';
import Opening from '../components/Opening';
import ScrollPage from '../hooks/ScrollPage'

const Homedev = () => {

  const ScreenWidth = window.innerWidth

  return (
    <div style={{marginTop:'100vh'}} className='xContainer'>
        <ScrollPage />
        <Opening />
        <Indicator />
        <Event_Content />
    </div>
  )
}

export default Homedev 