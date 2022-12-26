import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

  const addNewPerson=(event)=>{
    event.preventDefault()

    if (person){
      alert(`${newName} is already added to phonebook`)
    }
    else{
    const personObject={
      name: newName,
      number: newPhone

    }
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
    setNewFilter('')
  }
}
  const handlePersonChange=(event)=>{
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange=(event)=>{
    // console.log(event.target.value)
    setNewPhone(event.target.value)
  }
  const handleFilterChange=(event)=>{
    console.log(event.target.value)
    setNewFilter(event.target.value.toLowerCase())
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with <input
          value={newFilter}
          onChange={handleFilterChange}/>
        </div>
      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
        number: <input
          value={newPhone}
          onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* {persons.map(person=>
       <p key={person.name}>{person.name} {person.number}</p>  )} */}
       {persons.filter((person) => {
    if (newFilter === "") {
      return person;
    } else if (
      person.name
        .toLocaleLowerCase()
        .includes(newFilter.toLocaleLowerCase())
    ) {
      return person;
    }
  }).map((person, key) => {
    return (
      <div className="user" key={key}>
        <p>{person.name} {person.number}</p>
      </div>
    );
  })}
    </div>
  )

}

export default App
