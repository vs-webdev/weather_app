import weatherIcon from "../../assets/images/icon-drizzle.webp"

const HourlyForecast = () => {
  const hourlyForecastData = [
    {temp: '+17', time: '0:00'}, 
    {temp: '+16', time: '3:00'}, 
    {temp: '+15', time: '6:00'}, 
    {temp: '+16', time: '9:00'}, 
    {temp: '+22', time: '12:00'}, 
    {temp: '+22', time: '15:00'}, 
    {temp: '+21', time: '18:00'}, 
    {temp: '+19', time: '21:00'}, 
  ]
  return (
    <div className="px-3 py-5 bg-gray-600/10 h-full">
      <ul className="flex mb-3">
        {hourlyForecastData.map((data, index) => (
        <li key={index} className="mr-5 flex flex-col items-center">
          <img src={weatherIcon} alt="Weather Icon" className="w-15" />
          <span className="text-2xl">{data.temp}&deg;</span>
          <p className="text-sm mt-2">{data.time}</p>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default HourlyForecast
