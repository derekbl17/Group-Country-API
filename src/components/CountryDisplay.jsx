import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CountryDisplay = ({ countries }) => {
  const navigate = useNavigate();

  const handleMoreClick = (country) => {
    navigate(`/country/${country.name.common}`, { state: { country } });
  };

  return (
    <div className="countryCardContainer">
      {countries && countries.length > 0 ? (
        countries?.map((country, index) => (
          <div
            key={index}
            className={`countryCard ${country?.continents?.[0]?.replace(
              /\s+/g,
              "-",
            )}`}
          >
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
            />
            <h3>{country.name.common}</h3>
            <div className="cardContent">
              <p>{`Continent: ${country.continents}`}</p>
              <p>{`Capital: ${country.capital}`}</p>
            </div>
            <button
              className="moreButton"
              onClick={() => handleMoreClick(country)}
            >
              More
            </button>
          </div>
        ))
      ) : (
        <h1 className="error">NO COUNTRIES FOUND</h1>
      )}
    </div>
  );
};

export default CountryDisplay;
