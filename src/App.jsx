import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'
import allCountries from './dataFetch/countryApi'
import Header from './components/Header';
import CountryPage from './components/CountryPage';
import Footer from './components/Footer';
import RouteError from './components/RouteError';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(()=>{
    const fetchData=async()=>{
      const countries=await allCountries()
      setCountries(countries);
    };
    fetchData();
  }, []);

  const filteredCountries = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='backGround'>
      <div className='content'>
      <Router>
        <Routes>
          <Route path='/' element={<Header countries={filteredCountries} search={search} setSearch={setSearch} />}/>
          <Route path="/country/:countryName" element={<CountryPage />} />
          <Route path="*" element={<RouteError/>}/>
        </Routes>
      </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
