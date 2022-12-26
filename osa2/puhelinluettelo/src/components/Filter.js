const Filter = (props) => {
    // console.log("filter",props)
    return (
        <div>
        filter shown with <input
        value={props.newFilter}
        onChange={props.handleFilterChange}/>
        </div>
    )
  }

  export default Filter