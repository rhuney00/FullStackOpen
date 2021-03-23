import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherData = ({filteredCountry}) => {

    const [ weatherData, setWeatherData ] = useState({});
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${filteredCountry.capital}`

    useEffect(() => {

        axios
            .get(url)
            .then(response => {
                setWeatherData(response.data);
            });

    }, [url]);

    if (weatherData.current === undefined) {

        return (
            <div>
                <h2>Loading Weather Data</h2>
            </div>
        );

    } else {

        return (
            <div>
                <h2>Weather in {filteredCountry.capital}</h2>
                <p><b>Temperature:</b> {weatherData.current.temperature} Celcius</p>
                <img src={weatherData.current.weather_icons} alt={weatherData.current.weather_discriptions}/>
                <p><b>Wind:</b> {weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</p>
            </div>
        );

    }

}

export default WeatherData;