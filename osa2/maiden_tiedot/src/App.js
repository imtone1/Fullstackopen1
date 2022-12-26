import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountry] = useState([])
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        // console.log('promise fulfilled')
        // console.log(response.data)
        setCountry(response.data)
      })
  }, [])

  const handleFilterChange=(event)=>{
    // console.log(event.target.value)
    setNewFilter(event.target.value.toLowerCase())
  }

  const searchMatches =
  countries.filter(country =>
    country.name.common.toLowerCase().includes(newFilter.toLowerCase()))

  const elementCountries = () => {

    if (searchMatches.length > 1 && searchMatches.length < 11) {

        return (searchMatches.map(country => <p key={country.name.common}> {country.name.common}</p>))
    }
    else if (searchMatches.length > 10) {
        return ('Too many matches, specify another filter')

    }
    else if (searchMatches.length ===1){
        return (
          
          searchMatches.map(country => 
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
          <p>capital {country.capital[0]}</p>
          <p>area {country.area}</p>
          <h4>languages</h4>
          <ul>
          {Object.entries(country.languages).map(([key,value])=>{
          return (
              <li key={key}>{value.toString()}</li>
          );
        })}
          </ul>
          <img src={country.flags.png} alt="flag" />
          </div>)
          )
    }
}
  return (
    <div >
       <div>
        find countries <input
        value={newFilter}
        onChange={handleFilterChange}/>
        </div>
 {elementCountries()}
    </div>
  );
  
  
}

export default App;
