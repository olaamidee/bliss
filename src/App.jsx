import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaFacebook } from 'react-icons/fa'
import { FaBeer } from 'react-icons/fa'
import Nav from './components/Nav'
import Aside from './components/Aside'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Footer/>
      <Nav />
      <Aside/>
    </>
  )
}

export default App
