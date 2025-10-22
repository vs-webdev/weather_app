import { useMemo, useState } from "react"
import weatherIcon from "../../assets/images/icon-drizzle.webp"
import { useWeather } from "../../context/WeatherContext"

const HourlyForecast = () => {
  const {weatherData} = useWeather()
  const [selectedDay, setSelectedDay] = useState(0)
  
  const {time, temperature_2m, weather_code} = weatherData?.hourly || {}

  const getHourlyForecastData = (dayIndex) => {
    const start = dayIndex * 24
    const end = start + 24
    const result = time?.slice(start, end)
    .filter((_, i) => i % 3 === 0)
    .map((t, i) => ({
      time: new Date(t).toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit"}),
      temperature: temperature_2m[start + i * 3],
      weatherCode: weather_code[start + i * 3]
    }))
    return result
  }

  const hourlyForecastData = useMemo(
    () => getHourlyForecastData(selectedDay),
    [weatherData, selectedDay]
  )
  
  const weekdays = weatherData?.daily?.time?.map(d => {
    return new Date(d).toLocaleString("en-US", {weekday: "long"})
  })
  
  if (!weatherData){
    return <h1>loading</h1>
  }

  return (
    <div className="flex flex-col items-end px-6 py-5 bg-gray-600/10 h-full">
      <div className="flex gap-4 mb-2">
        <span>Hourly Forecast</span>
          <select name="day" id="day" onChange={(e) => setSelectedDay(Number(e.target.value))}>
            {weekdays?.map((day, index) => (
              <option key={index} value={index} className="border bg-neutral-800">
                {day}
              </option>
            ))}
          </select>
      </div>
      <ul className="flex gap-6">
        {hourlyForecastData.map((data, index) => (
        <li key={index} className="flex flex-col items-center">
          <div>
            <img src={weatherIcon} alt="Weather Icon" className="w-15" />
            <span className="text-2xl">{data.temperature}&deg;</span>
            <p className="text-sm mt-2">{data.time}</p>
          </div>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default HourlyForecast
