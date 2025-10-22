import { useMemo } from "react"
import { useWeather } from "../../context/WeatherContext"
import WEATHER_CODES from "../../constants/weatherCodes"

// changes in the styling 

const DailyForecast = () => {

  const {weatherData} = useWeather()

  const {temperature_2m_max, temperature_2m_min, time, weather_code} = weatherData?.daily || {}

  const dailyForecastData = useMemo(() => (
    time?.map((t, i) => {
      const [weekday, date] = new Date(t)
        .toLocaleString("en-US", {weekday: "long", day: "numeric", month: "short"})
        .split(',')
        .map(str => str.trim())
        
      return {
        weekday,
        date,
        weatherCode: weather_code[i],
        max: temperature_2m_max[i],
        min: temperature_2m_min[i],
      }
    }) || []
  ), [time])

  return (
    <div className="mt-12">
      <div className="mb-8">
        <hr />
      </div>
      <div className="px-4">
        <ul className="flex justify-between gap-4">
          {dailyForecastData?.map((data, index) => (
            <li key={index} className="w-full flex justify-center py-3 bg-gray-600/10 cursor-default">
              <div>
                <h3 className="text-lg font-semibold uppercase">{data.weekday}</h3>
                <span className="text-sm">{data.date}</span>
                <div className="flex flex-col text-sm text-neutral-400 mt-2">
                  <span>min: {data.min}&deg;</span>
                  <span>max: {data.max}&deg;</span>
                </div>
                <img src={WEATHER_CODES[data.weatherCode].icon} alt="Icon" className="w-16" />
                <div className="mt-">
                  <span className="text-sm">{WEATHER_CODES[data.weatherCode].description}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DailyForecast
