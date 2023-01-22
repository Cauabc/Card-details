import { useState } from 'react'
import './App.css'
import { Leftside } from './components/leftside/Leftside'
import { Rightside } from './components/rightside/Rightside'

import CNameContext from './contexts/CNameContext'

function App() {

  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState()
  const [mm, setMm] = useState()
  const [yy, setYy] = useState()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)

  return (
    <CNameContext.Provider value={{ cardName, setCardName, cardNumber, setCardNumber, cvv, setCvv, mm, setMm, yy, setYy, isConfirmed, setIsConfirmed, isEmpty, setIsEmpty }}>
      <div className="App">
        <Leftside />
        <Rightside />
      </div>
    </CNameContext.Provider>
  )
}

export default App
