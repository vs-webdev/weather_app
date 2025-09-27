import drizzle from "../../assets/images/icon-drizzle.webp"
import fog from "../../assets/images/icon-fog.webp"
import overcast from "../../assets/images/icon-overcast.webp"
import partlyCloudy from "../../assets/images/icon-partly-cloudy.webp"
import rain from "../../assets/images/icon-rain.webp"
import snow from "../../assets/images/icon-snow.webp"
import storm from "../../assets/images/icon-storm.webp"

const DailyForecast = () => {

  const dailyForecastMockData = [
    {day: 'friday', date: '24 July', min: '+15', max: '+22', forecast: 'Cloudy', icon: drizzle},
    {day: 'saturday', date: '25 July', min: '+12', max: '+25', forecast: 'Partly cloudy', icon: fog},
    {day: 'sunday', date: '26 July', min: '+17', max: '+25', forecast: 'Partly cloudy', icon: overcast},
    {day: 'monday', date: '27 July', min: '+18', max: '+29', forecast: 'Cloudy, light rain', icon: partlyCloudy},
    {day: 'tuesday', date: '28 July', min: '+18', max: '+30', forecast: 'Sunny', icon: rain},
    {day: 'wednesday', date: '29 July', min: '+18', max: '+29', forecast: 'Partly cloudy', icon: snow},
    {day: 'thursday', date: '30 July', min: '+18', max: '+29', forecast: 'Cloudy, thunderstorm', icon: storm},
  ]

  return (
    <div className="mt-12">
      <div className="mb-10">
        <hr />
      </div>
      <div>
        <ul className="flex justify-between px-8">
          {dailyForecastMockData.map((data, index) => (
            <li key={index}>
              <h3 className="text-lg font-semibold uppercase">{data.day}</h3>
                <span className="text-sm">{data.date}</span>
                <div className="flex flex-col text-sm mt-2">
                  <span>min: {data.min}&deg;</span>
                  <span>min: {data.max}&deg;</span>
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
