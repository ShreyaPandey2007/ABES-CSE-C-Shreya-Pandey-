import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import  Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <br />
      <Card></Card>
      <br />
      <Card></Card>
      <br />
      <Card></Card>
      
    </>
  )
}

export default App
