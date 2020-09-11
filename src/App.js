import React,{useState} from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';

function App() {
  const [weather,setWeather] = useState([])
  const APIKEY = 'e76d36361a59d72f618a2450c26d53fb'
  // Set up Hooks in React with useState

  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
      e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
    .then(res => res.json())
    .then(data => data)
    if(city && country){
    setWeather({
      data: apiData,
      city: apiData.city,
      country: apiData.sys.country,
      description: apiData.weather[0].description,
      temperature: Math.round(apiData.main.temp * 9/5 - 459.67),//Kelvin to Fahrenheit
      error:""
    }
    )} else {
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        error:"Please type in a city and country"
      }
      )}
  }
  //Asynchronous function to retrieve weather data from

  return (
    //send props to form and weather; also consoles weather data
    <div className="App">
      <h3>What's the Weather?</h3>
      <Form getWeather={fetchData} />
      <Weather
      city={weather.city}
      country={weather.country}
      description={weather.description}
      temperature={weather.temperature}
      error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}
//Hooks up fetch function to form then returns result
export default App;
