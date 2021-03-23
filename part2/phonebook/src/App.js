import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import servicePersons from './services/persons';

const App = () => {

  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filterName, setFilterName ] = useState('');
  const [ message, setMessage ] = useState(null);
  const [ messageType, setMessageType ] = useState(null);

  useEffect(() => {
    servicePersons
    .getAll()
    .then(intialPersons => {
      setPersons(intialPersons);
    });
  }, []);

  return (

    <div>
      <h2>Phonebook</h2>
      <Notification
        message={message}
        type = {messageType} />
      <Filter
        value={filterName}
        setFilterName={setFilterName}/>
      <h2>Add a new Number</h2>
      <PersonForm 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        servicePersons={servicePersons}
        setMessage={setMessage} 
        setMessageType={setMessageType}/>
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        setPersons={setPersons}
        filterName={filterName}
        servicePersons={servicePersons}
        setMessage={setMessage}
        setMessageType={setMessageType} />
    </div>

  );

}

export default App;
