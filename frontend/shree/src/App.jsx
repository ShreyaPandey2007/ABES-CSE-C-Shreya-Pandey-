import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Heading from './Components/Heading'
import Card from './Components/Card'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Heading/>
    <Card name="Pizza" src=""/>
    <Card name="Burger" src=""/>
    <Footer/>
    </>
  )
}

export default App
