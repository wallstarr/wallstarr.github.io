import './App.css';
import NavBar from './components/NavBar'
import Dropdown from './components/Dropdown'
import IntroArea from './components/IntroArea'
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
    <>
      <NavBar toggle={toggle}/>
      <Dropdown toggle={toggle} isOpen={isOpen}/>
      <IntroArea></IntroArea>
    </>
  );
}

export default App;
