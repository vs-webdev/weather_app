import axios from "axios"

export const searchLocation = async (name) => {
  const res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${name}`)
  console.log(res.data)
  const locations = res.data.results.map(element => {
    return {
      id: element.id,
      admin1: element.admin1,
      country: element.country,
      name: element.name,
      latitude: element.latitude,
      longitude: element.longitude
    }
  });
  console.log(locations)
  return locations
}

export const getWeather = async (latitude, longitude) => {
  try {
    const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude,
        longitude,
        hourly: "temperature_2m,relativehumidity_2m,windspeed_10m,apparent_temperature,surface_pressure,weather_code",
        daily: "temperature_2m_max,temperature_2m_min",
        current_weather: true,
        timezone: "auto",
      }
    })
    console.log('weather data', res.data)
    return res.data
  } catch (error) {
    console.error("Weather API error:", error)
  }
}