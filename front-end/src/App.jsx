import { useState } from 'react'

import SideBar from './components/SideBar'
import TopBar from './components/TopBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <TopBar />
    <SideBar />
    </>
  )
}

export default App
