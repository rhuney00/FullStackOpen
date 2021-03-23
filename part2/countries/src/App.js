import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetCountry from './components/GetCountry';
import CountryFilter from './components/CountryFilter';

const App = () => {

  const [ country, setCountry ] = useState('');
  const [ countryData, setCountryData ] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountryData(response.data);
      });
  },[]);

  return (

    <div>
      <GetCountry country={country} setCountry={setCountry}/>
      <CountryFilter country={country} countryData={countryData} setCountry={setCountry}/>
    </div>

  );

}

export default App;