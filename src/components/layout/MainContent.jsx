import { useWeather } from "../../context/WeatherContext"
import DailyForecast from "../weather/DailyForecast"
import HourlyForecast from "../weather/HourlyForecast"
import WeatherInfo from "../weather/WeatherInfo"
import LoadingSkeleton from "./LoadingSkeleton"

const MainContent = () => {
  const {loading} = useWeather()

  return (
    <div className="px-4 mt-40">
      {loading
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
