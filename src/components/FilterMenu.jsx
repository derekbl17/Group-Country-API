function FilterMenu({ allCountries, setFilteredCountries }) {
    const regions = [...new Set(allCountries.map((c) => c.region))].filter(Boolean)
  
    const handleFilter = (region) => {
      if (region === "All") {
        setFilteredCountries(allCountries)
      } else {
        const filtered = allCountries.filter((c) => c.region === region)
        setFilteredCountries(filtered)
      }
    }
  
    return (
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => handleFilter("All")}>Visos</button>
        {regions.map((region) => (
          <button key={region} onClick={() => handleFilter(region)}>
            {region}
          </button>
        ))}
      </div>
    )
  }
  
  export default FilterMenu
  