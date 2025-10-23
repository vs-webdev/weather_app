import { createContext, useContext, useEffect, useState } from "react";
import { useWeatherService } from "../hooks/useWeatherService";

const WeatherContext = createContext(null)

export const useWeather = () => {
  const context = useContext(WeatherContext)
  if (!context){
    throw new Error("useWeather must used within a WeatherProvider")
  }
  return context
}

export const WeatherProvider = ({children}) => {
  const {getWeatherData} = useWeatherService()
  const [weatherData, setWeatherData] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState({latitude: '19.07283', longitude: '72.88261', name: 'Mumbai, India'})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadWeather = async () => {
      setLoading(true)
      try {
        const data = await getWeatherData(selectedLocation.latitude, selectedLocation.longitude)
        setWeatherData(data)
      } catch (error) {
        console.error(err)
        setWeatherData(null)
      } finally {
        setLoading(false)
      }
    }
    loadWeather()
  }, [selectedLocation])

  const value = {
    loading, setLoading,
    weatherData, setWeatherData,
    selectedLocation, setSelectedLocation,
  }
  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}