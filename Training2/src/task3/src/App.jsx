import { useEffect, useRef, useState } from 'react'
import './App.css'
import CountDown from './Component/CountDown/CountDown'
// import CountdownSet from './Component/CountdownSet/CountdownSet'

function App() {
  const [countdown, setCountdown] = useState('')
  const [isRunningCountdown, setIsRunningCountdown] = useState(true)

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
        setCountdown(prev =>  prev - 1)
      }, 1000)
      setIsRunningCountdown(!isRunningCountdown)
    }
  }
  
  const handleStop = (e) => {
    e.preventDefault()
    clearInterval(timeId.current)
    setIsRunningCountdown(!isRunningCountdown)
  }

  useEffect(() => {
    if(!isRunningCountdown && countdown < 0){
      clearInterval(timeId.current)
      setIsRunningCountdown(false)
      alert('End')
    }
  }, [countdown])

  return (
    <div className='App'>
      <input onChange={e => setCountdown(e.target.value)}/>

      <div className='interactBtn'>
      <button onClick={isRunningCountdown? handleStart : handleStop}>{isRunningCountdown? 'Start' : 'Stop'}</button>
      </div>

      <CountDown countdown={countdown}/>
    </div>
  )
}

export default App
