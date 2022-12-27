const Person = (props) => {
    // console.log("Person ",props)

    // const deletePerson = id => {
    //   set(oldValues => {
    //     return oldValues.filter((_, i) => i !== index)
    //   })}
    return (
        <>
       {props.persons.filter((person) => {
    if (props.newFilter === "") {
      return person;
    } else if (
      person.name
        .toLocaleLowerCase()
        .includes(props.newFilter.toLocaleLowerCase())
    ) {
      return person;
    }
  }).map((person, key) => {
    return (
      <div key={key}>
       
        <span>{person.name} {person.number}</span>
        <button  onClick={(event) => {props.deletePerson(person.id, event)}}>delete</button></div>
    
    );
  })}
      </>
    )
  }

  export default Person