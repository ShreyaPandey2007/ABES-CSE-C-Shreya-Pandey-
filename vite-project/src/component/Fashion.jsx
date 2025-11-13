import React from 'react'

const Fashion = ({ city, temp, humidity, condition, icon }) => {
  return (
    <div id="card">
      <h2>{city}</h2>
      <h3>Temperature: {temp}°C</h3>
      <h4>Humidity: {humidity}%</h4>
      <h4>Condition: {condition}</h4>
      <img src={icon} alt={condition} />
    </div>
  )
}

export default Fashion