import React from 'react'
import './App.css'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './components/Products'
import { Exhibition } from './components/Exhibition'



function App() {


  return (
    <>
    <Navbar />
    <Hero/>
    <Exhibition/>
    <Products/>
    <Footer/>
    </>
  )
}

export default App
