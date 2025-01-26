import Event_Content from '../components/Event_Content'
import Indicator from '../components/Indicator';
import Opening from '../components/Opening';

const Home = () => {
  return (
    <div style={{marginTop:'100vh', paddingTop:"150px"}}>
      <Opening />
      <Indicator />
      <Event_Content />
    </div>
  )
}

export default Home