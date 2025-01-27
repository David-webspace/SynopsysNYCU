import Event_Content from '../components/Event_Content'
import Indicator from '../components/Indicator';
import Opening from '../components/Opening';
import ScrollPage from '../hooks/ScrollPage'

const Home = () => {
  return (
    <div style={{marginTop:'100vh', paddingTop:"0px"}}>
      <ScrollPage />
      <Opening />
      {/* <Indicator /> */}
      <Event_Content />
      <Event_Content />
      <Event_Content />
      <Event_Content />
      <a href='http://www.freevisitorcounters.com' style={{zIndex:"80"}}>Counters</a> 
      <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=2f19c2fe03a3801b32362e2ed3eea0872904e27a'></script>
      <script type="text/javascript" src="https://freevisitorcounters.com/en/home/counter/1293982/t/2"></script>
      <Event_Content />
    </div>
  )
}

export default Home 