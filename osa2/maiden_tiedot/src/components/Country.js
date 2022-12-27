import Weather from './Weather';

const Country = ({country}) => {

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
<Weather country={country}/>
</div>
 )}

 export default Country