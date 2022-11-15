import React from 'react'
import './App.css'

import Hero from './components/Hero'
import Navbar from './components/Navbar'

const clr = {
  green : "rgb(151, 195, 85)",
  blue:"rgb(56, 115, 181)"
}

function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default App
