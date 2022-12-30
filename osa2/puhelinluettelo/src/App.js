import { useState, useEffect } from 'react'
import ErrorMessage from './components/ErrorMessage'
import Filter from './components/Filter'
import PersonsForm from './components/PersonForm'
import Person from './components/Persons'
import personservice from './services/persons'

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
  const [message, setMessage] = useState(null)
  const [kind, setKind] = useState('')
 

  useEffect(() => {
    console.log('effect')
    personservice
    .getAll()
      .then(initialPerson => {
        console.log('promise fulfilled')
        setPersons(initialPerson)
      })
  }, [])


  const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

  const addNewPerson=(event)=>{
    event.preventDefault()

    if (person){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        // alert(`${newName} is already added to phonebook`)
          const personId=persons.find(p=>p.id ===person.id)
          const changedNumber={...personId, number:newPhone}

          console.log(personId)

          personservice
          .update(personId.id,changedNumber)
          .then(updatedNumber => {
            setPersons(persons.map(p=>p.id !==personId.id ? p: updatedNumber))
            setNewName('')
            setNewPhone('')
            setNewFilter('')
          })
  }
    }
    else{
    const personObject={
      name: newName,
      number: newPhone

    }
    
    personservice
    .create(personObject)
    .then(createdPerson => {
      setMessage(`Added ${createdPerson.name}`)
      setKind('success')
      // console.log("message on ",message)
      setPersons(persons.concat(createdPerson))
      setNewName('')
      setNewPhone('')
      setNewFilter('')
      
      setTimeout(()=>{setMessage(null)},5000)
      
    }).catch(error=>{
      console.log(error.response.data)
      setMessage(error.response.data.error)
      setKind('error')
    })  
  }
}

const deletePerson=(id, event)=>{
  event.preventDefault()
  
  const person = persons.find(item => item.id === id);  

  if (window.confirm(`Delete ${person.name}`)){
      personservice
  .poisto(person.id)
  .then(response => {
    console.log(response.data)
    setPersons(persons.filter(n=>n.id !==id))
    setNewName('')
    setNewPhone('')
    setNewFilter('')
  })
  .catch(error => {
    setMessage(
      `Information of ${person.name} has already removed from server`
    )
    setKind('error')
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    setPersons(persons.filter(n => n.id !== id))
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
      <ErrorMessage message={message} kind={kind}/>
     <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
     <h2>add a new</h2>
     <PersonsForm addNewPerson={addNewPerson} handlePersonChange={handlePersonChange} handlePhoneChange={handlePhoneChange} newName={newName} newPhone={newPhone}/>
      <h2>Numbers</h2>
    <Person persons={persons} newFilter={newFilter} deletePerson={deletePerson}/>
       
    </div>
  )

}

export default App
