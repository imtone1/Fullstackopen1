import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

function App() {
  const [countries, setCountry] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [showCountry, setShowCountry]=useState(false)
  const [country, setCountry1] = useState('')
  const [countryName, setCountryName] = useState('')
 

  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        // console.log('promise fulfilled')
        console.log(response.data)
        setCountry(response.data)
      })
  }, [])

  const handleFilterChange=(event)=>{
    // console.log(event.target.value)
    setNewFilter(event.target.value.toLowerCase())
    
  }
  const handleCountry=(country)=>{
    console.log("buttonissa",country)
    setShowCountry(!showCountry)
    setCountry1(country)
    setCountryName(countryName)
    
 
    
  }

  const searchMatches =
  countries.filter(country =>
    country.name.common.toLowerCase().includes(newFilter.toLowerCase()))

  const elementCountries = () => {

    if (searchMatches.length > 1 && searchMatches.length < 11) {

        return (searchMatches.map(country => {
         
        return(
        <div key={country.name.official}>
        <p > {country.name.common}</p>
        <button onClick={()=>handleCountry(country)}>show</button>
        </div>
       ) 
       
       })
       )
    }
    else if (searchMatches.length > 10) 
    {
        return (
          
          <p>Too many matches, specify another filter</p>)

    }
    else if (searchMatches.length ===1){
        return (
          
          searchMatches.map(country => 
            <Country country={country} key={country.name.common}/>
       )
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
 
 {showCountry ? <Country country={country} key={country.name.common}/> :"" }
    </div>
  );
  
  
}

export default App;
