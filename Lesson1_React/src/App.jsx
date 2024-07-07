import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body'
import Time from './components/Time/Time'

import SimpleCalculatorPlus from './components/SimpleCalculate/CalculatePlus/CalculatePlus'
import SimpleCalculatorMinus from './components/SimpleCalculate/CalculateMinus/CalculateMinus'
import SimpleCalculatorPodel from './components/SimpleCalculate/CalculatePodel/CalculatePodel'
import SimpleCalculatorUmnoj from './components/SimpleCalculate/CalculateUmnoj/CalculateUmnoj'

function App() {
  const [count] = useState(0)

  return (
    
    <div>
      <Header/>
      
      <Body/>
      <SimpleCalculatorPlus/>
      <SimpleCalculatorMinus/>
      <SimpleCalculatorPodel/>
      <SimpleCalculatorUmnoj/>

      <Footer/>
      <div>
        <Time/>
      </div>
      
      
    </div>
  )
}

export default App
