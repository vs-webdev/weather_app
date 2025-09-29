import { useEffect, useRef, useState } from "react"
import searchIcon from "../../../assets/images/icon-search.svg"

const mockSearchData = ["England, United Kingdom", "Ontario, Canada", "Ohio, United States", "Kentucky, United States", "Arkansas, United States"]

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const searchBarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)){
        setShowOptions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setShowOptions(false)
    setSearchText('')
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
            value={searchText}
            onChange={e => {
                const value = e.target.value
                setSearchText(value)
                setShowOptions(value.length > 0)
              }
            }
          />
        </div>
        <button type="submit" className="border px-7 py-1 rounded-[10px] text-lg font-medium hover:bg-gray-500/20 cursor-pointer">Search</button>
      </form>
      {showOptions && (<div>
        <ul className="absolute border w-full rounded-[10px] mt-2 bg-neutral-800 overflow-hidden">
          {
            mockSearchData.map(cityLocation => (
              <li className="px-4 py-2 border-b-[1px] border-neutral-700 hover:bg-neutral-600 cursor-pointer"
                onClick={() => setSearchText(`London, ${cityLocation}`)}
              >
                <h3 className="text-lg">London</h3>
                <span className="text-sm">{cityLocation}</span>
              </li>
            ))
          }
        </ul>
      </div>)}
    </div>
  )
}

export default SearchBar
