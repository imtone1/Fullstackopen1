import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({country}) => {
const [weather, setWeather]=useState([])
const [isLoading, setLoading] = useState(true); // Loading state

useEffect(() => {
    
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        // console.log(response.data)
        setWeather(response.data)
        setLoading(false); //set loading state
      });
  },[]); // useEffect will trigger whenever id is different.
// console.log(weather.weather[0].icon)
if (isLoading) {
    return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>Loading the weatherdata</div>
  );
  }

return(
<>
<h4>Weather in {weather.name}</h4>
<p>temperature {(weather.main.temp - 273.15).toFixed(2) } Celsius</p>
<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather logo"/>
<p>wind {weather.wind.speed} m/s</p>
</>
 )}

 export default Weather
