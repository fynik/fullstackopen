const Person = ( { person, deleteHandler } ) => 
<p>{person.name} {person.number} <button onClick={() => deleteHandler(person.id)}>delete</button></p>;

export default Person;