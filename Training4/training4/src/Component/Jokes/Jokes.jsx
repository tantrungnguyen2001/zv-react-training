import './Jokes.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { debounce, throttle } from 'lodash'

export default function Jokes() {
  const [jokes, setJokes] = useState([])
  
  const getJoke = () => {
    axios.get(`https://official-joke-api.appspot.com/jokes/random`)
      .then(data => setJokes([data.data]))
      // .catch(err => console.log(err))
      .finally()
  }

  useEffect(() => {getJoke()}, [])

  const testDelayDebounce = () => {
    getJoke()
    console.log('Debounce');
  }

  const testDelayThrottle = () => {
    getJoke()
    console.log('Throttle');
  }

  const debounceOnClick = debounce(testDelayDebounce, 1000)

  const throttleOnClick = throttle(testDelayThrottle, 1000)

  return (
    <div>
      <ul>
        {jokes.map((joke, id) => (
          <li key={id}>
            Setup: {joke.setup}<br></br>
            Punchline: {joke.punchline}<br></br>
          </li>
        ))}
      </ul>

      <button 
        onClick={debounceOnClick}
        className='btnMoreJokes'
      >Get more jokes (Debounce)</button>
      
      <button 
        onClick={throttleOnClick}
        className='btnMoreJokes'
      >Get more jokes (Throttle)</button>
    </div>
  )
}
