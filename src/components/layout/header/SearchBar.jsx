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
  const { getGeoLocation } = useWeatherService()
  const {setSelectedLocation, searchResults, setSearchResults, setHasSearched} = useWeather()
  useClickOutside(searchBarRef, () => setShowOptions(false))

  const handleOnChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    setHasSearched(false)
    
    // Debounce
    if (debounceRef.current){
      clearTimeout(debounceRef.current)
    }
    
    debounceRef.current = setTimeout(async () => {
      if (value.length < 2){
        setSearchResults([])
        setShowOptions(false)
        return
      }

      const searches = (await getGeoLocation(value) || [])
      const hasResults = searches.length > 0

      setSearchResults(hasResults ? searches : [])
      setShowOptions(hasResults)
    }, 500);
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    // prevent empty query
    if (!searchQuery.trim()) {
      setHasSearched(false)
      return
    }

    // mark search attempt
    setHasSearched(true)

    // handle no results
    if (searchResults.length === 0) return

    const selectedCity = searchResults[0]
    const city = [selectedCity.name, selectedCity.admin1, selectedCity.country].filter(Boolean).join(', ')
    setSelectedLocation({latitude: selectedCity.latitude, longitude: selectedCity.longitude, name: city})
    setShowOptions(false)
    setSearchQuery('')
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
                  const city = [cityLocation.name, cityLocation.admin1, cityLocation.country].filter(Boolean).join(', ')
                  setSearchQuery(city)
                  setShowOptions(false)
                  setSelectedLocation({latitude: cityLocation.latitude, longitude: cityLocation.longitude, name: city})
                }} 
              >
                <h3 className="text-lg">{cityLocation?.name}</h3>
                <span className="text-sm">{cityLocation?.admin1 ? `${cityLocation?.admin1},` : ""} {cityLocation?.country}</span>
              </li>
            ))
          }
        </ul>
      </div>)}
    </div>
  )
}

export default SearchBar
