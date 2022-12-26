const Person = (props) => {
    // console.log("Person ",props)
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
        <p>{person.name} {person.number}</p>
      </div>
    );
  })}
      </>
    )
  }

  export default Person