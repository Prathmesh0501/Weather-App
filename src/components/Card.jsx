import React from 'react'
import { useWeather } from '../context/weather'

function Card() {

    const weather = useWeather()

  return (
    <div>
        <img src={weather.data?.current?.condition?.icon} alt="img" />
        <h1>Temp : {weather.data?.current?.temp_c}.C</h1>
        <h2>{weather.data?.location?.name}{","}{weather.data?.location?.region}{" "}{weather.data?.location?.country}</h2>
        <h2>Feels Like : {weather.data?.current?.feelslike_c}</h2>
        <h2>Humidity : {weather.data?.current?.humidity}</h2>
        <h2>Air Qaulity (pm10) : {weather.data?.current?.air_quality?.pm10}</h2>

    </div>
  )
}

export default Card