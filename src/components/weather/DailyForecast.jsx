import { useMemo } from "react"
import drizzle from "../../assets/images/icon-drizzle.webp"
import fog from "../../assets/images/icon-fog.webp"
import overcast from "../../assets/images/icon-overcast.webp"
import partlyCloudy from "../../assets/images/icon-partly-cloudy.webp"
import rain from "../../assets/images/icon-rain.webp"
import snow from "../../assets/images/icon-snow.webp"
import storm from "../../assets/images/icon-storm.webp"
import { useWeather } from "../../context/WeatherContext"

const DailyForecast = () => {
  
  const mockData = [
    {forecast: 'drizzle', icon: drizzle},
    {forecast: 'fog', icon: fog},
    {forecast: 'overcast', icon: overcast},
    {forecast: 'partlyCloudy', icon: partlyCloudy},
    {forecast: 'rain', icon: rain},
    {forecast: 'snow', icon: snow},
    {forecast: 'storm', icon: storm},
  ]

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
        forecast: mockData[i].forecast || "unknown",
        icon: mockData[i].icon
      }
    }) || []
  ), [time])

  return (
    <div className="mt-12">
      <div className="mb-10">
        <hr />
      </div>
      <div>
        <ul className="flex justify-between px-8">
          {dailyForecastData?.map((data, index) => (
            <li key={index}>
              <h3 className="text-lg font-semibold uppercase">{data.weekday}</h3>
                <span className="text-sm">{data.date}</span>
                <div className="flex flex-col text-sm mt-2">
                  <span>min: {data.min}&deg;</span>
                  <span>max: {data.max}&deg;</span>
                </div>
                <img src={data.icon} alt="Icon" className="w-16" />
                <div className="mt-">
                  <span className="text-sm">{data.forecast}</span>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DailyForecast
