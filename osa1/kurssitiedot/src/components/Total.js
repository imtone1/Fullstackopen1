const Total = (props) => {
    // console.log(props.parts[0].exercises + props.parts[1].exercises+props.parts[2].exercises)
// console.log("total", props.parts)
const {parts}=props
// console.log("total", props)
let sum = 0;
parts.map(part=>sum +=part.exercises)
  
    
    console.log("total",sum)
    return (
      <div>
       <p>
         Total of {sum} exercises
        </p>
      </div>
    )
  }

  export default Total