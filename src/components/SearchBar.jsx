function SearchBar({ allCountries, setFilteredCountries }) {
    const handleSearch = (e) => {
      const value = e.target.value.toLowerCase();
      const filtered = allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(value)
      );
      setFilteredCountries(filtered);
    };
  
    return (
      <input
        type="text"
        placeholder="Ieškoti šalies..."
        onChange={handleSearch}
        style={{ padding: '10px', width: '300px', margin: '20px' }}
      />
    );
  }
  
  export default SearchBar;
