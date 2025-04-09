import React from 'react'

const CountryDisplay = ({countries}) => {
  return (
    <div className='countryCardContainer'>
    {countries.map((country, index) => (
     <div key={index} className={`countryCard ${country.continents[0].replace(/\s+/g, "-")}`}>
     <img
       src={country.flags.png}
       alt={`Flag of ${country.name.common}`}
     />
      <h3>{country.name.common}</h3>
      <div className='cardContent'>
        <p>{`Continent: ${country.continents}`}</p>
        <p>{`Capital: ${country.capital}`}</p>
      </div>
      <button className='moreButton'>More</button>
      
   </div>
    ))}
  </div>
  )
}

export default CountryDisplay
