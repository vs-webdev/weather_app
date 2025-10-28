import WEATHER_CODES from "../../constants/weatherCodes"
import { useWeather } from "../../context/WeatherContext"

const WeatherInfo = () => {
  const {weatherData, selectedLocation} = useWeather()

  const {
    windspeed, 
    temperature, 
    surface_pressure, 
    relative_humidity_2m, 
    precipitation_probability,
    apparent_temperature,
    weather_code,
  } = weatherData?.current

  const {
    temperature: tempUnit, 
    windspeed: windspeedUnit, 
    relative_humidity_2m: humidityUnit, 
    surface_pressure: pressureUnit, 
    precipitation_probability: precipitationProbabilityUnit,
    apparent_temperature: apparentTempUnit,
  } = weatherData?.current_units

  const formattedTime = (type) => {
    const formattedDate = new Date(weatherData?.daily?.[type][0])
    return formattedDate?.toLocaleTimeString("en-US", {hour: 'numeric', minute: '2-digit'})
  }

  const date = new Date(weatherData?.current?.time)
  const formattedDate = date?.toLocaleString("en-US", {weekday: "long", month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", hour12: false})

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">{selectedLocation.name}</h1>
      <div className="flex justify-between py-4">
        <div className="mr-12 flex flex-col items-center">
          <div className="flex relative h-27 w-30 overflow-hidden">
            <img src={WEATHER_CODES[weather_code].icon} alt="Weather Icon" className="w-30 absolute top-[-5px] left-0" />
          </div>
          <div>
            <p className="text-sm">Sunrise: {formattedTime('sunrise')}</p>
            <p className="text-sm">Sunset: {formattedTime('sunset')}</p>
          </div>
        </div>
        <div className="mr-12">
          <p className="text-lg font-semibold">{formattedDate}</p>
          <h2 className="text-7xl font-semibold mb-4">{temperature}{tempUnit}</h2>
          <h3 className="text-2xl font-medium mb-1">Feels like {apparent_temperature}{apparentTempUnit}</h3>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">More Details</h3>
          <div className="text-sm">
            <p className="mb-1">Wind speed: <span className="font-semibold">{windspeed} {windspeedUnit}</span></p>
            <p className="mb-1">Air humidity: <span className="font-semibold">{relative_humidity_2m}{humidityUnit}</span></p>
            <p className="mb-1">Pressure: <span className="font-semibold">{surface_pressure} {pressureUnit}</span></p>
            <p className="mb-1">Precipitation probability: <span className="font-semibold">{precipitation_probability}{precipitationProbabilityUnit}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
