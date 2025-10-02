import { createContext, useContext, useState } from "react";

const WeatherContext = createContext(null)

export const useWeather = () => {
  const context = useContext(WeatherContext)
  if (!context){
    return new Error("useWeather must used within a WeatherProvider")
  }
  return context
}

export const WeatherProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState(null)
  const [selectedGeoLoc, setSelectedGeoLoc] = useState({latitude: '', longitude: ''})

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