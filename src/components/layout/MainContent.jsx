import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"
import WeatherInfo from "./WeatherInfo"

const MainContent = () => {
  return (
    <div>
      <div>
        <WeatherInfo />
        <HourlyForecast />
      </div>
      <div>
        <DailyForecast />
      </div>
    </div>
  )
}

export default MainContent
