import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="search..."
    />
  );
}

export default SearchBar;
