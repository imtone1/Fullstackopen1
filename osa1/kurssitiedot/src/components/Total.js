const Total = (props) => {

// parts.map(part=>sum +=part.exercises)

    const total = props.parts.reduce(
      (s, p) => s + p.exercises,
      0
    );

    return (
      <div>
       <p>
         Total of {total} exercises
        </p>
      </div>
    )
  }

  export default Total