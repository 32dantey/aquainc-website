import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

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
