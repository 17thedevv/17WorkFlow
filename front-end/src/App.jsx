import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes/AppRoutes'

import SideBar from './components/SideBar'
import TopBar from './components/TopBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <TopBar />
      <SideBar />
    <AppRoutes />
    </BrowserRouter>
  )
}

export default App
