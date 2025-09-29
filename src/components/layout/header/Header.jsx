import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-xl font-medium">Weather Now</h1>
      <SearchBar />
      <div className="units">Units</div>
    </div>
  )
}

export default Header
