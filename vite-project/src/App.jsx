import { useEffect, useState } from 'react'
import './App.css'
import Fashion from './component/Fashion'

function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Delhihttps://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched data:", data)
        setWeather(data)
      })
  }, [])

  return (
    <>
      {!weather ? (
        <h3>Loading...</h3>
      ) : (
        <Fashion 
          city={weather.name}
          temp={weather.main.temp}
          humidity={weather.main.humidity}
          condition={weather.weather[0].main}
        />
      )}
    </>
  )
}

export default App
