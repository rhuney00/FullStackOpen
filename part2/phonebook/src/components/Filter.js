import React from 'react';

const Filter = ({ value, setFilterName}) => {

    const handleOnChangeFilterName = (event) => {

        setFilterName(event.target.value);

    }

    return (

        <div>
            filter shown with <input value={value} onChange={handleOnChangeFilterName}/>
        </div>

    );

}

export default Filter;