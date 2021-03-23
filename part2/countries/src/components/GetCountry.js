import React from 'react';

const GetCountry = ({country, setCountry}) => {

    const handleCountryChange = (event) => {

        setCountry(event.target.value);        

    }

    return (

        <div>
        find country <input value={country} onChange={handleCountryChange}/>
        </div>

    );

}

export default GetCountry