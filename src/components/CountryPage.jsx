import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryPage = () => {
  const { state } = useLocation();
  const { country } = state || {};

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div className="country-page">
      
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
      <div className='info'>
        <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {country.languages && Object.values(country.languages).join(', ')}</p>
      <button >Uždaryti</button>
      </div>
      
    </div>
  );
};

export default CountryPage;
