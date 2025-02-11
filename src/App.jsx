
import React from 'react'
 import Navbar from "./components/NavBar/Navbar"
 import Home from "./components/Home/Home"
 import Project from "./components/Projects/Projects"
 import Contact from './components/Contacts/Contact'
 import About from "./components/About/About"
 import Footer from "./components/Footer/Footer"
const App = () => {
  return (
   <>
  
  
 <div className='h-auto w-full overflow-hidden'>
 <Navbar/>
  <Home/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>
 </div>
   </>
  )
}

export default App