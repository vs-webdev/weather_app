import { useState } from "react"
import { getWeather, searchLocation } from "../services/weatherAPI"

export const useWeatherService = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchGeoLocation = async (name) => {
    try {
      const locations = await searchLocation(name)
      return locations
    } catch (error) {
      console.log(error.message)
    }
  }

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading(true)
      setError(null)
      const weatherData = await getWeather(latitude, longitude)
      return weatherData
    } catch (error) {
      console.error("fetch weather error:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, fetchGeoLocation, fetchWeatherData }
}