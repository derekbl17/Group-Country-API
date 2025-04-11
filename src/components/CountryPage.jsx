import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CountryPage = () => {
  const { state } = useLocation();
  const { country } = state || {};

  const navigate = useNavigate();

const goBackHome = () => {
  navigate(-1);
};

  if (!country) {
    return <h1 className='error'>Country not found.</h1>;
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
      <button onClick={goBackHome}>Return</button>
      </div>
      
    </div>
  );
};

export default CountryPage;
