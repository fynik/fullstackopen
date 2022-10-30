import { useState, useEffect } from "react";
import PersonsList from "./components/Persons";
import PersonForm from "./components/PersonForm";
import FilterForm from "./components/FilterForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]) ;

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(resp => setPersons(resp.data));
  }, []);

  const nameInputHandler = (event) => setNewName(event.target.value);
  const numberInputHandler = (event) => setNewNumber(event.target.value);
  const filterHandler = (event) => setFilter(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();

    const personExist = persons.filter(person => person.name === newName).length !== 0;

    if (personExist) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };
      
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
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
      <PersonsList persons={filteredPersons} />
    </>
  )
}

export default App;
