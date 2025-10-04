import { useRef, useState } from "react"
import searchIcon from "../../../assets/images/icon-search.svg"
import { useWeather } from "../../../context/WeatherContext"
import { useWeatherService } from "../../../hooks/useWeatherService"
import { useClickOutside } from "../../../hooks/useClickOutside"

const SearchBar = () => {
  const searchBarRef = useRef(null)
  const debounceRef = useRef(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const { fetchGeoLocation, fetchWeatherData } = useWeatherService()
  const {setSelectedGeoLoc, selectedGeoLoc, setWeatherData} = useWeather()
  useClickOutside(searchBarRef, () => setShowOptions(false))

  const handleOnChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)

    // Debounce
    if (debounceRef.current){
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(async () => {
      if (value.length > 1){
        const searches = await fetchGeoLocation(value)
        if (searches.length > 0){
          setSearchResults(searches)
          setShowOptions(true)
        }
      } else {
        setSearchResults([])
        setShowOptions(false)
      }
    }, 300);
  }
  
  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const data = await fetchWeatherData(selectedGeoLoc.latitude, selectedGeoLoc.longitude)
      setWeatherData(data)
    } catch (error) {
      console.log("Search error:", error.message)
    } finally {
      setShowOptions(false)
      setSearchQuery('')
    }
  }

  return (
    <div className="relative" ref={searchBarRef}>
      <form onSubmit={handleSearch} className="flex h-11">
        <div className="flex items-center border w-100 px-4 h-full rounded-[10px] mr-6">
          <label htmlFor="search" className="cursor-pointer"><img src={searchIcon} alt="Search Icon"  className="mr-4 h-5"/></label>
          <input
            type="text"
            id="search"
            placeholder="Search for a place..."
            className="h-full w-full outline-none text-lg"
            value={searchQuery}
            autoComplete="off"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="border px-7 py-1 rounded-[10px] text-lg font-medium hover:bg-gray-500/20 cursor-pointer">Search</button>
      </form>
      {showOptions && (<div>
        <ul className="absolute border w-full rounded-[10px] mt-2 bg-neutral-800 overflow-hidden">
          {
            searchResults.map((cityLocation) => (
              <li key={cityLocation.id} className="px-4 py-2 border-b-[1px] border-neutral-700 hover:bg-neutral-600 cursor-pointer"
                onClick={() => {
                  setSearchText(`${cityLocation.name}, ${cityLocation.admin1}, ${cityLocation.country}`)
                  setShowOptions(false)
                  setSelectedGeoLoc({latitude: cityLocation.latitude, longitude: cityLocation.longitude, name: `${cityLocation.name}, ${cityLocation.country}`})
                }} 
              >
                <h3 className="text-lg">{cityLocation.name}</h3>
                <span className="text-sm">{cityLocation.admin1}, {cityLocation.country}</span>
              </li>
            ))
          }
        </ul>
      </div>)}
    </div>
  )
}

export default SearchBar
