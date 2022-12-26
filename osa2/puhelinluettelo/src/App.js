import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNewPerson=(event)=>{
    event.preventDefault()
    // console.log("form target",event.target)
    const personObject={
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>
       <p key={person.name}>{person.name}</p>  )}
    </div>
  )

}

export default App
