const PersonsForm = (props) => {
    // console.log("PersonsForm ",props)
    return (
        <>
        <form onSubmit={props.addNewPerson}>
        <div>
          name: <input
          value={props.newName}
          onChange={props.handlePersonChange}/>
        </div>
        <div>
        number: <input
          value={props.newPhone}
          onChange={props.handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </>
    )
  }

  export default PersonsForm