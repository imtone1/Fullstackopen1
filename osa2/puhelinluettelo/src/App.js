import { useState } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonForm'
import Person from './components/Persons'

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
     <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
     <h2>add a new</h2>
     <PersonsForm addNewPerson={addNewPerson} handlePersonChange={handlePersonChange} handlePhoneChange={handlePhoneChange} newName={newName} newPhone={newPhone}/>
      <h2>Numbers</h2>
    <Person persons={persons} newFilter={newFilter}/>
       
    </div>
  )

}

export default App
