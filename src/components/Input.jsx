import React from 'react'
import { useWeather } from '../context/weather'

function Input() {
    const weather = useWeather()
    return (
        <div>
            <h1>Weather App</h1>
            <input type="text" placeholder="Search City" onChange={(e) => weather.setCity(e.target.value)} />
        </div>
    )
}

export default Input