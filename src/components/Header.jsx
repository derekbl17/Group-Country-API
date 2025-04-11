import React, { useState } from 'react';
import CountryDisplay from './countryDisplay';

const Header = ({ countries, search, setSearch }) => {
  const [selectedContinent, setSelectedContinent] = useState("All");

  const filterCountries = () => {
    if (selectedContinent === "All") {
      return countries;
    }
    return countries.filter((country) =>
      country.continents.includes(selectedContinent)
    );
  };

  return (
    <div>
      <header 
        style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px 20px'
        }}
      >
        <div className="continentFilter" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button className='continentButton All' onClick={() => setSelectedContinent("All")}>All</button>
          <button className='continentButton Asia' onClick={() => setSelectedContinent("Asia")}>Asia</button>
          <button className='continentButton Europe' onClick={() => setSelectedContinent("Europe")}>Europe</button>
          <button className='continentButton Africa' onClick={() => setSelectedContinent("Africa")}>Africa</button>
          <button className='continentButton Oceania' onClick={() => setSelectedContinent("Oceania")}>Oceania</button>
          <button className='continentButton North-America' onClick={() => setSelectedContinent("North America")}>North America</button>
          <button className='continentButton Antarctica' onClick={() => setSelectedContinent("Antarctica")}>Antarctica</button>
          <button className='continentButton South-America' onClick={() => setSelectedContinent("South America")}>South America</button>
        </div>
        
        <div className="searchBar" style={{ flex: '0 0 300px' }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search..."
            style={{
              width: '70%',
              height: '30px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              margin: '0 0 0 50px',
              padding: '0 10px',
              outline: 'none'
            }}
          />
        </div>
      </header>
      <CountryDisplay countries={filterCountries()} /> 
    </div>
  );
};

export default Header;
