import sunnyIcon from "../../assets/images/icon-sunny.webp"

const WeatherInfo = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="mr-14 flex flex-col items-center">
        <img src={sunnyIcon} alt="Sunny Icon" className="w-30" />
        <div>
          <p className="text-sm">Sunrise: 4:59</p>
          <p className="text-sm">Sunset: 20:47</p>
        </div>
      </div>
      <div className="mr-14">
        <p className="text-lg font-semibold">Friday 27 July 15:00</p>
        <h2 className="text-7xl font-semibold mb-5">+22&deg;C</h2>
        <h3 className="text-2xl font-medium mb-1">Feels like 23&deg;</h3>
        <p className="text-sm">The whole day will be cloudy. No precipitation.</p>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">More Details</h3>
        <div className="text-sm">
          <p className="mb-1">Wind speed: <span className="font-semibold">1-8 m/s</span></p>
          <p className="mb-1">Air humidity: <span className="font-semibold">42-76%</span></p>
          <p className="mb-1">Pressure: <span className="font-semibold">747-749mm</span></p>
          <p className="mb-1">Precipitation probability: <span className="font-semibold">2%</span></p>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
