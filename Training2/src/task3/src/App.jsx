import { useEffect, useRef, useState } from 'react'
import './App.css'
import CountDown from './Component/CountDown/CountDown'
// import CountdownSet from './Component/CountdownSet/CountdownSet'

function App() {
  const [countdown, setCountdown] = useState('')
  const [toggle, setToggle] = useState(true)

  const timeId = useRef()

  const handleStart = (e) => {
    e.preventDefault()
    // Check input valid
    if(countdown.length == 0){
      alert('Please input a number')
    }else if(isNaN(countdown)){
      alert('Invalid input. Must be a number')
    }else if(countdown<0){
      alert('Number must be greater than 0')
    }else {
      timeId.current = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
      setToggle(!toggle)
    }
    return () => clearInterval(timeId.current)
  }

  const handleStop = (e) => {
    e.preventDefault()
    clearInterval(timeId.current)
    setToggle(!toggle)
  }

  useEffect(() => {
    if(countdown < 0){
      clearInterval(timeId.current)
      alert('End')
    }
  }, [countdown])

  return (
    <div className='App'>
      <input onChange={e => setCountdown(e.target.value)}/>
      {toggle ? 
      <button onClick={handleStart}>Start</button>
      :
      <button onClick={handleStop}>Stop</button>
    }
      <CountDown countdown={countdown}/>
    </div>
  )
}

export default App
