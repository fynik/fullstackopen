import { useState, useEffect } from "react";
import PersonsList from "./components/Persons";
import PersonForm from "./components/PersonForm";
import FilterForm from "./components/FilterForm";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]) ;

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    phonebookService
      .getAll()
      .then(persons => setPersons(persons));
  }, []);

  const nameInputHandler = (event) => setNewName(event.target.value);
  const numberInputHandler = (event) => setNewNumber(event.target.value);
  const filterHandler = (event) => setFilter(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();

    const personExist = persons.filter(person => person.name === newName).length !== 0;

    if (personExist) {
      const person = persons.find(p => p.name === newName);
      const personId = person.id;
      if (window.confirm(`${person.name} already in phonebook. Replace the old number with a new one?`)) {
        const updatedPerson = { ...person, number: newNumber};

        phonebookService
          .updatePerson(personId, updatedPerson)
          .then(returnedPerson => 
            setPersons(persons.map(p => p.id !== personId ? p : returnedPerson)));
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      
      phonebookService
        .createPerson(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        });
    }
  }

  const deletePerson = id => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService
        .deletePerson(id)
        .then(() => setPersons(
          persons.filter(p => p.id !== id)
        ));
    }
  }

  const filteredPersons = filter === ''
    ? persons 
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <h2>Phonebook</h2>
      <FilterForm filter={filter} filterHandler={filterHandler}/>
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson}
                  nameInputHandler={nameInputHandler} numberInputHandler={numberInputHandler} />
      <br />
      <h3>Numbers</h3>
      <PersonsList persons={filteredPersons} deleteHandler={deletePerson}/>
    </>
  )
}

export default App;
