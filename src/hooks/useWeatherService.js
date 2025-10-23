import { useState } from "react"
import { fetchLocation, fetchWeather } from "../services/weatherAPI"

export const useWeatherService = () => {
  const [error, setError] = useState(null)

  const getGeoLocation = async (name) => {
    try {
      const locations = await fetchLocation(name)
      return locations
    } catch (error) {
      console.log(error.message)
    }
  }

  const getWeatherData = async (latitude, longitude) => {
    try {
      setError(null)
      const weatherData = await fetchWeather(latitude, longitude)
      return weatherData
    } catch (error) {
      console.error("fetch weather error:", error)
      setError(error.message)
    }
  }

  return { error, getGeoLocation, getWeatherData }
}