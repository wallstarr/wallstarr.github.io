import './App.css';
import NavBar from './components/NavBar'
import Dropdown from './components/Dropdown'
import IntroArea from './components/IntroArea'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import React, {useState, useEffect} from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  function toggle() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    function hideMenu() {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <div class="overscroll-contain">
      <NavBar toggle={toggle}/>
      <Dropdown toggle={toggle} isOpen={isOpen}/>
      <IntroArea></IntroArea>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
    </div>
  );
}

export default App;
