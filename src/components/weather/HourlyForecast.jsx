import weatherIcon from "../../assets/images/icon-drizzle.webp"
import { useWeather } from "../../context/WeatherContext"

const HourlyForecast = () => {
  const {weatherData} = useWeather()
  if (!weatherData){
    return <h1>loading</h1>
  }
  
  const {time, temperature_2m, weather_code} = weatherData?.hourly

  const hourlyForecastData = time?.slice(0, 24).filter((_, i) => i % 3 === 0).map((t, i) => {
    const formattedTime = new Date(t).toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit"})
    return {
      time: formattedTime ,
      temperature: temperature_2m[i],
      weatherCode: weather_code[i]
    }
  })

  return (
    <div className="px-3 py-5 bg-gray-600/10 h-full">
      <ul className="flex mb-3">
        {hourlyForecastData.map((data, index) => (
        <li key={index} className="mr-5 flex flex-col items-center">
          <img src={weatherIcon} alt="Weather Icon" className="w-15" />
          <span className="text-2xl">{data.temperature}&deg;</span>
          <p className="text-sm mt-2">{data.time}</p>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default HourlyForecast
