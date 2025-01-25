import './App.css'
import { useState } from 'react'
import { Route, Routes, useParams } from 'react-router'
// import { useTranslation } from 'react-i18next'
// import './i18n'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
