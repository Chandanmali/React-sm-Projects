import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Slider from './components/Slider'
import CryptoPrice from './components/CryptoPrice'


function App() {
  const [toggle, setToggle] = useState(true);

  const lightTheme = () => {
    setToggle(false)
  }

  const darkTheme = () => {
    setToggle(true)
  }

  return (
    <>
      <div className={`${toggle ? "bg-gradient-to-tr from-black via-black to-yellow-400" : "bg-gradient-to-tr from-white via-white to-yellow-400"}`}>
      <Navbar  toggleVar = {toggle}/>
      <Intro toggleVar = {toggle} val1 = {lightTheme} val2 = {darkTheme}/>
      <Slider toggleVar = {toggle} />
      <CryptoPrice toggleVar = {toggle}/>

      </div>
      
    </>
  )
}

export default App
