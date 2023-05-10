import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { debounce, throttle } from 'lodash'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {getCountries()}, [])
  
  const getCountries = () => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(data => {setCountries(data.data)})
      .then(err => console.log(err))
      .finally()
  }

  const filterCountries = countries.filter(
    country => {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    })

  const updateSearchBarDebounce = e => {
    setSearch(e?.target?.value)
    console.log('Debounce Tick');
  }

  const updateSearchBarThrottle = e => {
    setSearch(e?.target?.value)
    console.log('Throttle Tick');
  }

  const debounceOnChange = debounce(updateSearchBarDebounce, 200)
  const throttleOnChange = throttle(updateSearchBarThrottle, 200)

  return (
    <div className='app'>
      <input onChange={debounceOnChange} placeholder='Debounce...' style={{marginBottom: '8px'}}/>
      <input onChange={throttleOnChange} placeholder='Throttle...'/>
      <ul>
        {filterCountries.map((country, index) => (
          <li key={index}>
            <div>{country.name.common}<br/></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App