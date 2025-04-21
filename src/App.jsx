import './App.css'
import './css/semi_btn.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router'
import { Documents, Home, Homedev, Contact, Online_Free_Resource, Event_2025, Event_Review, Origin, FAQ, Guidelines } from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
import Backend from './pages/Backend'
import FooterContact from './components/FooterContact'
import ScrolltoTop from './hooks/ScrolltoTop'

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
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dev' element={<Homedev />} />
        <Route path='/dev/*' element={
          <Routes>
            <Route path='/event2025' element={<Event_2025 />} />
            <Route path='/guidelines' element={<Guidelines />} />
            <Route path='/event-review' element={<Event_Review />} />
            <Route path='/online-resource' element={<Online_Free_Resource />} />
    
            <Route path='/origin' element={<Origin />} />
            <Route path='/faqs' element={<FAQ />} />
            <Route path='/contacts' element={<Contact />} />
    
            <Route path='/backend' element={<Backend />}/>
            <Route path='/visit' element={<Backend />}/>
          </Routes>
        } />
      </Routes> */}

      <Routes>
        <Route path='/' element={<Homedev />} />
        <Route path='/event2025' element={<Event_2025 />} />
        <Route path='/guidelines' element={<Guidelines />} />
        <Route path='/event-review' element={<Event_Review />} />
        <Route path='/online-resource' element={<Online_Free_Resource />} />

        <Route path='/origin' element={<Origin />} />
        <Route path='/faqs' element={<FAQ />} />
        <Route path='/contacts' element={<Contact />} />

        <Route path='/backend' element={<Backend />}/>
        <Route path='/visit' element={<Backend />}/>
      </Routes>

      <div className='semiButton'>
        {/* <SemiButton /> */}
        {/* <SemiButton2 /> */}
        {/* <SemiSVG /> */}
      </div>


      {/* {location.pathname != '/' && <Header />} */}
      <Header />
      <FooterContact />
      <Footer />
    </>
  )
}

export default App
