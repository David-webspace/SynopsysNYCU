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
import SemiButton2 from './components/semi_btn/SemiButton2'
import FooterContact from './components/FooterContact'
import ScrolltoTop from './hooks/ScrolltoTop'

function App() {

  const location = useLocation();

  return (
    <>
      <ScrolltoTop />
      <Routes>
        <Route path='/SynopsysNYCU/' element={<Home />} />

        <Route path='/SynopsysNYCU/event2025' element={<Event_2025 />} />
        <Route path='/SynopsysNYCU/event-review' element={<Event_Review />} />
        <Route path='/SynopsysNYCU/online-resource' element={<Online_Free_Resource />} />

        <Route path='/SynopsysNYCU/' element={<Origin />} />
        <Route path='/SynopsysNYCU/faqs' element={<FAQ />} />
        <Route path='/SynopsysNYCU/contacts' element={<Contact />} />


        <Route path='/SynopsysNYCU/backend' element={<Backend />}/>
        <Route path='/SynopsysNYCU/visit' element={<Backend />}/>

      </Routes>

      <div className='semiButton'>
        {/* <SemiButton /> */}
        {/* <SemiButton2 /> */}
        
      </div>


      {location.pathname != '/SynopsysNYCU/' && <Header />}
      {/* <Header /> */}
      <FooterContact />
      <Footer />
    </>
  )
}

export default App
