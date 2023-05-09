import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { debounce } from 'lodash'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {getCountries()}, [])
  
  const getCountries = () => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(data => {
        setCountries(data.data)
        setSearch(data.data)
      })
      .then(err => console.log(err))
      .finally()
  }

  const filter = (e) => {
    setSearch(countries.filter(country => country.name.common.toLowerCase().includes(e.target.value)))
    // debounce(fff, 1000)
  }

  return (
    <>
    <input 
      onChange={filter}
    />
    <ul>
      {search.map((country, index) => (
        <li key={index}>
          <div>
            {country.name.common}<br></br>
            <img src={country.flags.png}/>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App