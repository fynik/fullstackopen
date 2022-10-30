import Person from "./Person";

const PersonsList = ({ persons, deleteHandler }) => {
  return (
  <div>
      { persons.map(person => 
          <Person
            key={person.id}
            person={person}
            deleteHandler={deleteHandler}
          />) }
  </div>
  )  
}

export default PersonsList;