import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {getCountries()}, [])
  
  const getCountries = () => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(data => setCountries(data.data))
      .then(err => console.log(err))
      .finally()
  }

  return (
    <>
    <ul>
      {countries.map((country, index) => (
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