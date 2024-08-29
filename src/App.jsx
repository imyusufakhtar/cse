import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [selectedTab, setSelectedTab]= useState("Home");

  return (
    <>
      <div className='Main'>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {/* <Home/> */}
      <Outlet/>
      {/* <About/>
      <Education/> 
      <Projects/> */}
      </div>
    </>
  )
}

export default App
