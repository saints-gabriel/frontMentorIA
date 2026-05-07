import { useState } from 'react'
import LoginPage from './pages/LoginPage.jsx'
import './App.css'
import styles from './styles/Globals.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage />
    </>
  )
}

export default App
