import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Header/>
      <Body/>
      <Footer/>
      
      
    </div>
  )
}

export default App
