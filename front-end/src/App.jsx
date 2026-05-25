import { useState } from 'react'

import SideBar from './components/SideBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
     <SideBar />
  )
}

export default App
