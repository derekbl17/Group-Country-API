import { useEffect, useState } from 'react'
import './App.css'
import allCountries from './dataFetch/countryApi'
import Header from './components/Header';

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
      <Header countries={countries}/>
    </div>
  )
}

export default App
