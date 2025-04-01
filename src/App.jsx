import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router'
import { Home } from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
// import SemiButton from './components/semi_btn/SemiButton'
import Event_2025 from './pages/Event_2025'
import Event_Review from './pages/Event_Review'
import Online_Free_Resource from './pages/Online_Free_Resource'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Origin from './pages/Origin'
import Backend from './pages/Backend'
import FooterContact from './components/FooterContact'
import ScrolltoTop from './hooks/ScrolltoTop'
import Homedev from './pages/Homedev'

function App() {

  const location = useLocation();
  // Add this to handle GitHub Pages refresh
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/dev') && !window.location.hash) {
      window.history.replaceState(null, '', `/#${path}`);
    }
  }, []);

  return (
    <>
      <ScrolltoTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dev' element={<Homedev />} />
        <Route path='/dev/*' element={
          <Routes>
            <Route path='/event2025' element={<Event_2025 />} />
            <Route path='/event-review' element={<Event_Review />} />
            <Route path='/online-resource' element={<Online_Free_Resource />} />
    
            <Route path='/origin' element={<Origin />} />
            <Route path='/faqs' element={<FAQ />} />
            <Route path='/contacts' element={<Contact />} />
    
            <Route path='/backend' element={<Backend />}/>
            <Route path='/visit' element={<Backend />}/>
          </Routes>
        } />
      </Routes>

      <div className='semiButton'>
        {/* <SemiButton /> */}
        {/* <SemiButton2 /> */}
        {/* <SemiSVG /> */}
      </div>


      {location.pathname != '/' && <Header />}
      <FooterContact />
      <Footer />
    </>
  )
}

export default App
