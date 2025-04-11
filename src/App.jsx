import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'
import allCountries from './dataFetch/countryApi'
import Header from './components/Header';
import CountryPage from './components/CountryPage';

function App() {
  const [countries, setCountries] = useState([]);


  useEffect(()=>{
    const fetchData=async()=>{
      const countries=await allCountries()
      console.log(countries[0])
      console.log(countries[0].flags.png)
      setCountries(countries);
    }
    fetchData()
  },[])

  return (
    <div className='backGround'>
      <Router>
        <Routes>
          <Route path='/' element={<Header countries={countries}/>}/>
          <Route path="/country/:countryName" element={<CountryPage />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
