const Header = (props) => {
  // console.log(props.course)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props.parts[0])
  return (
    <div>
     
        <Part part={props.parts[0]}/>
        <Part part={props.parts[1]}/>
        <Part part={props.parts[2]}/>

    </div>
  )
}

const Part = (props)=>{
  console.log(props.part)
  return(
    <>
    <p>{props.part.nimi} {props.part.exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props.parts[0].exercises + props.parts[1].exercises+props.parts[2].exercises)
  return (
    <div>
     <p>
        Total {props.parts[0].exercises + props.parts[1].exercises+props.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
        {
            nimi: 'Fundamentals of React',
            exercises: 10
        },
        {
            nimi: 'Using props to pass data',
            exercises: 7
        },
        {
            nimi: 'State of a component',
            exercises: 14
        }
    ]
    
}
// console.log(course.parts[0].part)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
     
      <Total parts={course.parts}/>
    </div>
  )
}
export default App