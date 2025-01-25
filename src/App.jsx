import './App.css'
import { useState } from 'react'
import { Route, Routes, useParams } from 'react-router'
import { Home } from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
import SemiButton from './components/semi_btn/SemiButton'
// import { useTranslation } from 'react-i18next'
// import './i18n'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <SemiButton /> */}
      <Header />
      <Footer />
    </>
  )
}

export default App
