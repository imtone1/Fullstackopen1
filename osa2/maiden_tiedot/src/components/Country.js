import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
const [weather, setWeather]=useState([])
const api_key=process.env.REACT_APP_API_KEY
useEffect(() => {
    
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}`)
      .then(response => {
        console.log(response.data)
        setWeather(response.data)
      });
  },[]); // useEffect will trigger whenever id is different.
return(
<div key={country.name}>
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
<h4>Weather in {weather.name}</h4>
<p>temperature {weather.main} Celsius</p>
<img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="weather logo"/>
<p>wind {weather.wind.speed} m/s</p>
</div>
 )}

 export default Country