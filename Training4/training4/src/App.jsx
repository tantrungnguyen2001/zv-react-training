import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { debounce, throttle } from 'lodash'
import './App.css'

export default function App() {
  const [jokes, setJokes] = useState([])
  const [moreJokes, setMoreJokes] = useState(0)

  useEffect(() => {
    axios.get(`https://official-joke-api.appspot.com/jokes/random`)
      .then(data => setJokes([data.data]))
      .catch(err => console.log(err))
      .finally()
  }, [moreJokes])
  
  useEffect(() => {
    console.log(moreJokes);
  }, [moreJokes])

  const handleMoreJokeClick = () => setMoreJokes(next => next + 1)

  const debounceOnClick = debounce(handleMoreJokeClick, 1000)

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
      >Get more jokes</button>
    </div>
  )
}
