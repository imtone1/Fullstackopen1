import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
  number: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addNewPerson=(event)=>{
    event.preventDefault()
    // console.log("form target",event.target)
    let found=false
    persons.map(person=>{
      if (person?.name===newName)
      {
        return found=true
      }
      return found=false
    })
    if (found){
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
  }
}
  const handlePersonChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange=(event)=>{
    console.log(event.target.value)
    setNewPhone(event.target.value)
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
        number: <input
          value={newPhone}
          onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>
       <p key={person.name}>{person.name} {person.number}</p>  )}
    </div>
  )

}

export default App
