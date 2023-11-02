
import { useEffect } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Card from './components/Card'
import Input from './components/Input'
import { useWeather } from './context/weather'

function App() {

  const weather = useWeather()
 
  useEffect(() =>{
    weather.fetchLocation()
  },[])

  function refreshPage(){
    window.location.reload()
  }

  return (
    <>
      <Input />
      <Buttons onClick ={weather.fetchData} value = "Search"/>
      <Card />
      <Buttons value = "Refresh" onClick={refreshPage}/>
    </>
  )
}

export default App
