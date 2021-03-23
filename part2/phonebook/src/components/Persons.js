import React from 'react';

const Persons = ({ persons, setPersons, filterName, servicePersons, setMessage, setMessageType }) => {

    const filterNames = filterName.length > 0 ? persons.filter(person => person.name.includes(filterName)) : persons;
    
    const deletePerson = (id) => {

        if (window.confirm(`Delete ${persons.filter(person => person.id === id)[0].name}`)) {

            servicePersons
                .deletePerson(id)
                .then(() => setPersons(persons.filter(person => person.id !== id)))
                .then(() => {
                    setMessage(`Deleted ${persons.filter(person => person.id === id)[0].name} from phonebook`);
                    setMessageType('good');
                    setTimeout(() => {
                        setMessage(null);
                        setMessageType(null);
                    }, 5000);
                })
                .catch(error => {
                    setMessage(`Information of ${persons.filter(person => person.id === id)[0].name} has already been removed from server. Will remove contact now.`);
                    setMessageType('bad');
                    setPersons(persons.filter(person => person.id !== id));
                    setTimeout(() => {
                        setMessage(null);
                        setMessageType(null);
                    }, 5000);
                });

        }

    }

    return (

        <div>
            { filterNames.map(person => {

                return (

                    <p key={person.id}>
                        {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
                    </p>

                    ); 
                }) 
            }
        </div>

    )

}

export default Persons;