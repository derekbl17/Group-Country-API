import { useEffect, useState } from 'react';
import './App.css';
import allCountries from './dataFetch/countryApi';
import Header from './components/Header';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const countries = await allCountries();
      setCountries(countries);
    };
    fetchData();
  }, []);

  const filteredCountries = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='backGround'>
      <Header countries={filteredCountries} search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
