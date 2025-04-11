import React from 'react'
import { useState } from 'react';
import CountryDisplay from './countryDisplay';
import SearchBar from './SearchBar'

const Header = ({countries}) => {
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
        <header>
        <div className="continentFilter">
        <button className='continentButton All' onClick={() => setSelectedContinent("All")}>All</button>
        <button className='continentButton Asia' onClick={() => setSelectedContinent("Asia")}>Asia</button>
        <button className='continentButton Europe' onClick={() => setSelectedContinent("Europe")}>Europe</button>
        <button className='continentButton Africa' onClick={() => setSelectedContinent("Africa")}>Africa</button>
        <button className='continentButton Oceania' onClick={() => setSelectedContinent("Oceania")}>Oceania</button>
        <button className='continentButton North-America' onClick={() => setSelectedContinent("North America")}>North America</button>
        <button className='continentButton Antarctica' onClick={() => setSelectedContinent("Antarctica")}>Antarctica</button>
        <button className='continentButton South-America' onClick={() => setSelectedContinent("South America")}>South America</button>
      </div>
      <div className='searchBar'>
      <SearchBar/>
      </div>
      </header>

      <CountryDisplay countries={filterCountries()} /> 
    </div>
  )
}

export default Header
