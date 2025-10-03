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
  const {fetchWeatherData} = useWeatherService()
  const [weatherData, setWeatherData] = useState(null)
  const [selectedGeoLoc, setSelectedGeoLoc] = useState({latitude: '19.07283', longitude: '72.88261', name: 'Mumbai, India'})

  useEffect(() => {
    const loadWeather = async () => {
      const data = await fetchWeatherData(selectedGeoLoc.latitude, selectedGeoLoc.longitude)
      setWeatherData(data)
    }
    loadWeather()
  }, [])

  const value = {
    weatherData, setWeatherData,
    selectedGeoLoc, setSelectedGeoLoc,
  }
  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}