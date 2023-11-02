const url = "https://api.weatherapi.com/v1/current.json?key=e86ea574e23d45d5b21182757230211"

export const getWeatherData = async (city) =>{
    const response = await fetch(`${url}&q=${city}&aqi=yes`)
    return await response.json()
}

export const getLocation = async (lat,log) =>{
    const response = await fetch(`${url}&q=${lat},${log}&aqi=yes`)
    return await response.json()
}