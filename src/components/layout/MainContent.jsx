import { useWeather } from "../../context/WeatherContext"
import DailyForecast from "../weather/DailyForecast"
import HourlyForecast from "../weather/HourlyForecast"
import WeatherInfo from "../weather/WeatherInfo"
import LoadingSkeleton from "./LoadingSkeleton"

const MainContent = () => {
  const {isLoading, searchResults, hasSearched} = useWeather()

  if (!isLoading && hasSearched && searchResults.length === 0) {
    return (
      <div className="flex justify-center items-center h-full mt-40">
        <p className="text-lg text-gray-400">No results found</p>
      </div>
    )
  }
  
  return (
    <div className="px-4 mt-40">
      {isLoading
      ? <LoadingSkeleton />
      : (
        <>
          <div className="flex justify-between">
            <WeatherInfo />
            <HourlyForecast />
          </div>
          <div>
            <DailyForecast />
          </div>
        </>
      )}
    </div>
  )
}

export default MainContent
