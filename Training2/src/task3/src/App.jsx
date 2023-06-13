import { useEffect, useRef, useState } from 'react'
import './App.css'
import CountDown from './Component/CountDown/CountDown'
// import CountdownSet from './Component/CountdownSet/CountdownSet'

function App() {
  const [countdown, setCountdown] = useState('')
  const [isRunningCountdown, setIsRunningCountdown] = useState(false)

  const timeId = useRef()

  const handleStart = (e) => {
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
    clearInterval(timeId.current)
    setIsRunningCountdown(!isRunningCountdown)
  }

  const handleResume = (e) => {
    if(isRunningCountdown) return
    else {
      timeId.current = setInterval(() => {
        setCountdown(prev =>  prev - 1)
      }, 1000)
      setIsRunningCountdown(true)
    }
  }

  const handlePause = (e) => {
    clearInterval(timeId.current)
    setIsRunningCountdown(false)
  }

  useEffect(() => {
    if(isRunningCountdown && countdown < 0){
      clearInterval(timeId.current)
      setIsRunningCountdown(false)
    }
  }, [countdown])

  return (
    <div className='App'>
      <input value={countdown} onChange={e => setCountdown(e.target.value)}/>

      <div className='interactBtn'>
      <button onClick={isRunningCountdown? handleStop : handleStart}>{isRunningCountdown? 'Stop' : 'Start'}</button>
      <button onClick={handleResume}>Resume</button>
      <button onClick={handlePause}>Pause</button>
      
      </div>

      <CountDown countdown={countdown}/>
    </div>
  )
}

export default App
