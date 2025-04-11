import React from 'react';

function CountryList({ countries }) {
  if (!countries.length) return <p>Šalių nėra.</p>;

  return (
    <ul>
      {countries.map((c) => (
        <li key={c.cca3}>{c.name.common}</li>
      ))}
    </ul>
  );
}

export default CountryList;
