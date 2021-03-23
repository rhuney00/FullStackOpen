import React from 'react';

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons, servicePersons, setMessage, setMessageType}) => {

    const saveContact = (event) => {

      event.preventDefault();
  
      if (persons.filter(person => person.name === newName).length > 0) {
  
        if(window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {

          const newContact = {
            name: newName,
            number: newNumber,
          }

          const id = persons.filter(person => person.name === newName)[0].id;

          servicePersons
            .update(id, newContact)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== id ? person : returnedPerson));
            });
          
          setMessage(`Updated the phone number of ${newContact.name}`);
          setMessageType('good');
          setTimeout(() => {
            setMessage(null);
            setMessageType(null);
          }, 5000);

        }
  
      } else {
  
        const newContact = {
          name: newName,
          number: newNumber,
        }

        servicePersons
          .create(newContact)
          .then(returnedPerson => {

            setPersons(persons.concat(returnedPerson));

          });
        
        setMessage(`Added ${newContact.name}`);
        setMessageType('good');
        setTimeout(() => {
          setMessage(null);
          setMessageType(null);
        }, 5000);
    
      }
    
    }
    
    const handleOnChangeName = (event) => {

        setNewName(event.target.value);
    
      }
    
      const handleOnChangeNumber = (event) => {
    
        setNewNumber(event.target.value);
    
      }

    return (

        <form>
            <div>
                name: <input value={newName} onChange={handleOnChangeName}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleOnChangeNumber}/>
            </div>
            <div>
                <button type="submit" onClick={saveContact}>save</button>
            </div>
        </form>

    )

}

export default PersonForm;