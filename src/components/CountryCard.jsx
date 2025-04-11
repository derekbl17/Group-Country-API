function CountryCard({ country, onSelect }) {
  return (
    <div className="country-card">
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width={80} />
      <h3>{country.name.common}</h3>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital?.[0]}</p>
      <button onClick={() => onSelect(country)}>More</button>
    </div>
  );
}

export default CountryCard;