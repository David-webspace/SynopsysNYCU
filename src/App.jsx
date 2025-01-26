import './App.css'
import { useState } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router'
import { Home } from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
import SemiButton from './components/semi_btn/SemiButton'
import Event_2025 from './pages/Event_2025'
import Event_Review from './pages/Event_Review'
import Online_Free_Resource from './pages/Online_Free_Resource'
// import { useTranslation } from 'react-i18next'
// import './i18n'

function App() {

  const locaiton = useLocation();


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/event2025' element={<Event_2025 />} />
        <Route path='/event-review' element={<Event_Review />} />
        <Route path='/online-resource' element={<Online_Free_Resource />} />

      </Routes>
      {/* <SemiButton /> */}
      {/* {location.pathname != '/' && <Header />} */}
      <Header />
      <Footer />
    </>
  )
}

export default App
