
const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Top Section (WeatherInfo + HourlyForecast layout) */}
      <div className="flex justify-between">
        <div>
          {/* Location Title */}
          <div className="h-6 w-40 bg-neutral-700 rounded mb-15"></div>

          {/* WeatherInfo Skeleton */}
          <div className="flex">
            <div className="flex flex-col mr-12 space-y-2">
              <div className="h-24 w-24 bg-neutral-700 rounded-full"></div>
              <div className="h-4 w-25 bg-neutral-700 rounded"></div>
              <div className="h-4 w-25 bg-neutral-700 rounded"></div>
            </div>
            <div className="mr-12 space-y-2">
              <div className="h-5 w-50 bg-neutral-700 rounded"></div>
              <div className="h-16 w-50 bg-neutral-700 rounded"></div>
              <div className="h-6 w-45 bg-neutral-700 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-6 w-25 bg-neutral-700 rounded"></div>
              <ul className=" space-y-2">
                {Array.from({length: 4}).map((_, i) => (
                  <li key={i} className="h-4 w-35 bg-neutral-700 rounded"></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* HourlyForecast Skeleton */}
        <div className="flex flex-col items-end px-6 py-5 bg-gray-600/10 h-full">
          <div className="flex gap-4 mb-4">
            <div className="h-5 w-20 bg-neutral-700 rounded"></div>
            <div className="h-5 w-30 bg-neutral-700 rounded"></div>
          </div>
          <ul className="flex space-x-6">
            {Array.from({length: 8}).map((_, i) => (
            <li key={i} className="flex flex-col space-y-3">
              <div className="h-15 w-15 bg-neutral-700 rounded-full"></div>
              <div className="h-6 w-12 bg-neutral-700 rounded"></div>
              <div className="h-5 w-15 bg-neutral-700 rounded"></div>
            </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-neutral-700"></div>

      {/* DailyForecast Skeleton */}
      <div className="flex justify-between gap-4 px-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center bg-neutral-700/30 p-4 rounded w-full">
            <div className="space-y-3">
              <div className="h-5 w-15 bg-neutral-700 rounded"></div>
              <div className="h-3 w-8 bg-neutral-700 rounded"></div>
              <div className="h-3 w-8 bg-neutral-700 rounded-full"></div>
              <div className="h-12 w-12 bg-neutral-700 rounded-full"></div>
              <div className="h-3 w-20 bg-neutral-700 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSkeleton
