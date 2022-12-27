import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonsForm from './components/PersonForm'
import Person from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456' },
    // { name: 'Ada Lovelace', number: '39-44-5323523' },
    // { name: 'Dan Abramov', number: '12-43-234345' },
    // { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


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
    
    axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewPhone('')
      setNewFilter('')
    })   
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
