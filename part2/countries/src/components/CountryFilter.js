import React from 'react';
import WeatherData from './WeatherData';

const CountryFilter = ({country, countryData, setCountry}) => {

    let filteredData = countryData.filter(countryInfo => countryInfo.name.toLowerCase().includes(country));
  
    if(filteredData.length <= 10 && filteredData.length > 1) {
  
      return (
  
        filteredData.map((countryInfo, index) => {
            
            return (
                <div key={index}>
                    {countryInfo.name} <button key={index} onClick={() => setCountry(countryInfo.name.toLowerCase())}>show</button>
                </div>
            );
            
        })
  
      );
  
    } else if ( filteredData.length === 1 ) {
  
        const selectedCountry = filteredData[0];

        return (
    
            <div>
            <h1>{selectedCountry.name}</h1>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Popluation: {selectedCountry.population}</p>
            <h2>Spoken Languages</h2>
            <ul>
                {selectedCountry.languages.map((language, index) => <li key={index}>{language.name}</li>)}
            </ul>
            <img src={selectedCountry.flag} alt='Country Flag' />
            <WeatherData filteredCountry={selectedCountry} />
            </div>
    
        );
  
    } else {
  
        return (
    
            <p>too many matches, specify another filter</p>
    
        );
  
    }
  
  }

  export default CountryFilter;