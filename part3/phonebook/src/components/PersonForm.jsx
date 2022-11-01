const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        name: <input value={props.newName} onChange={props.nameInputHandler}/>
      </div>
      <div>
        number: <input value={props.newNumber} onChange={props.numberInputHandler}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )  
};

export default PersonForm;